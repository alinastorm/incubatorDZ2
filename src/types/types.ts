
export interface BlogInputModel {
    name: string//    maxLength: 15
    youtubeUrl: string // maxLength: 100     pattern: ^ https://([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$
}
export interface BlogViewModel {
    id: string
    name: string
    youtubeUrl: string
}
export interface PostInputModel {
    title: string//    maxLength: 30
    shortDescription: string//    maxLength: 100
    content: string//    maxLength: 1000
    blogId: string
}
export interface PostViewModel {
    id: string
    title: string
    shortDescription: string
    content: string
    blogId: string
    blogName: string
}
export interface APIErrorResult {
    errorsMessages: FieldError[]
}

export interface FieldError {
    message?: string | null// nullable: true,    Message with error explanation for certain field
    field?: string | null//    nullable: true,    What field / property of input model has error  
}

export interface IObject { [key: string]: any }
