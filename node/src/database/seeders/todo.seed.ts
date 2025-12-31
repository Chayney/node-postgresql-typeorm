import { MigrationDataSource } from '../../config/migrationDataSource';
import { Todo } from '../../domain/entity/todo.entity';

export const TodoSeedData = async () => {
    const dataSource = await MigrationDataSource.initialize();
    const todoRepository = dataSource.getRepository(Todo);

    const todos = [
        { title: 'Todo 1', content: 'This is the first todo.' },
        { title: 'Todo 2', content: 'This is the second todo.' },
        { title: 'Todo 3', content: 'This is the third todo.' },
    ];

    for (const todo of todos) {
        const exists = await todoRepository.findOneBy({ title: todo.title });
        // 既存のデータはスキップ
        if (!exists) {
            const todoEntity = todoRepository.create(todo);
            await todoRepository.save(todoEntity);
        }
    }

    console.log('✅ 初期データを挿入しました');
    await dataSource.destroy();
};
