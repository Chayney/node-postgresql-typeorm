export type GetTodoListParam = {
    keyword?: string
}

export type CreateNewTodoParam = {
    title: string;
    content: string;
};

export type UpdateExistingTodoParam = {
    id: number;
    title: string;
    content: string;
};