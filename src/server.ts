import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

// Database and MongoDB Connection
async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Portfolio app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
