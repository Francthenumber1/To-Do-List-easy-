/**
 * interface to define the tasktype
*/
interface Tasktype {
    id: number;
    title: string;
    createAt: Date;
    updateAt: Date;
    status: boolean;

}

export default class TaskModel implements Tasktype {
    readonly id: number;
    title: string;
    readonly createAt: Date;
    updateAt: Date;
    status: boolean;

    constructor(id: number, title: string, createAt: Date, updateAt: Date, status: boolean) {
        this.id = id;
        this.title = title;
        this.createAt = createAt;
        this.updateAt = updateAt;
        this.status = status;
    }
    /** 
     * Get the title of task
    */

    getTitle(): string {
        return this.title;
    }
    /**
     * update the new data for the title
     * @param value set new data for title
    */
    setTitle(value: string): TaskModel {
        this.title = value;
        return this;
    }

    /**
     * get the status of task
     */
    getStatus(): boolean {
        return this.status;
    }

    /**  update new status for task
     * @param value new status value 
     */
    setStatus(value: boolean): TaskModel {
        this.status = value
        return this
    }
    setUpdateAt(value: Date): TaskModel {
        this.updateAt = value
        return this;
    }
}