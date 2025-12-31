import { TodoSeedData } from './todo.seed';

const run = async () => {
    await TodoSeedData();
    process.exit(0);
};

run();
