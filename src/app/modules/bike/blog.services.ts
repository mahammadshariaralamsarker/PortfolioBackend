/* eslint-disable @typescript-eslint/no-explicit-any */ 

import { Blogs } from './blog.model';
import { TBlogs } from './blog.Interface';

// Bi Cycle Data Save to Database
const BlogsDataSaveToDatabase = async (blog: TBlogs) => {
  const result = await Blogs.create(blog);
  return result;
};

// All Bi-Cycle Data get From Database
const getAllBlogsDataFromDatabase = async (query: Record<string, unknown>) => {
  let searchTerm = '';
  let maxPrice: number | undefined;
  let minPrice: number | undefined;

  const queryObject = { ...query };
  const BlogsSearchableField = ['brand', 'name', 'category'];
  if (query?.searchTerm) {
    searchTerm = query.searchTerm as string;
  }

  // Price Range Validation and Data Set
  if (query?.minPrice) {
    minPrice = Number(query?.minPrice);
  }
  if (query?.maxPrice) {
    maxPrice = Number(query?.maxPrice);
  }
  let searchQuery = Blogs.find();
  if (searchTerm) {
    searchQuery = searchQuery.find({
      $or: BlogsSearchableField.map((field) => ({
        [field]: { $regex: searchTerm, $options: 'i' },
      })),
    });
  }

  if (minPrice !== undefined || maxPrice !== undefined) {
    const priceFilter: Record<string, number> = {};
    if (minPrice !== undefined) {
      priceFilter.$gte = minPrice;
    }
    if (maxPrice !== undefined) {
      priceFilter.$lte = maxPrice;
    }
    searchQuery = searchQuery.find({ price: priceFilter });
  }

  // Availability Filtering
  if (query.availability) {
    if (query.availability === 'in-stock') {
      searchQuery = searchQuery.find({ stock: { $gt: 0 } });
    } else if (query.availability === 'out-of-stock') {
      searchQuery = searchQuery.find({ stock: { $lte: 0 } });
    }
  }

  // Exclude Filed For Filter
  const excludeField = ['searchTerm', 'maxPrice', 'minPrice', 'availability'];
  excludeField.forEach((el) => delete queryObject[el]);
  searchQuery = searchQuery.find(queryObject);
  const result = await searchQuery.exec();
  return result;
};

// Single Bi-Cycle Data get From Database
const getSingleBlogsDataFromDatabase = async (id: string) => {
  const result = await Blogs.findById(id);
  return result;
};

// Single Bi-Cycle Data Update From Database
const singleBlogsDataUpdateFromDatabase = async (id: string, cycle: TBlogs) => {
  const result = await Blogs.findByIdAndUpdate(id, { ...cycle }, { new: true });
  return result;
};

// Single Bi-Cycle Data Delete From Database
const singleBlogsDataDeleteFromDatabase = async (id: string) => {
  const result = await Blogs.findByIdAndDelete(id);
  return result;
};

// Export Bi Cycle Services
export const BlogsServices = {
  BlogsDataSaveToDatabase,
  getAllBlogsDataFromDatabase,
  getSingleBlogsDataFromDatabase,
  singleBlogsDataUpdateFromDatabase,
  singleBlogsDataDeleteFromDatabase,
};
