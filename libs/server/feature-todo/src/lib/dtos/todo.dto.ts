import { ITodo, IUpdateTodo, IUpsertTodo } from '@libs/shared/domain';
import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
export class CreateTodoDto implements Pick<ITodo, 'title' | 'description'> {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsNotEmpty()
    description!: string;
}

export class UpsertTodoDto implements IUpsertTodo {
    id!: string;
    title!: string;
    description!: string;
    completed!: boolean;
  }
  
  export class UpdateTodoDto implements IUpdateTodo {
    // 
  }