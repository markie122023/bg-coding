
export interface Itopic {
    _id?: unknown;
    topicImage?: string;
    topicName?: string;
    description?: string;
    courseId?: number;
    topicId?: number;
}

export interface Icourse {
    _id?: unknown;
    courseCode?: string;
    courseId?: number;
    courseName?: string;
    courseImage?: string;
    topics: Itopic[]
}

export interface Ifaculty{
    facultyName?: string;
    _id?: unknown;
    facultyId?: number;
    description?: string;
    courses: Icourse[]
}
export interface Iresource  {
    resourceTypeName?: string;
    _id?: unknown;
    description?: string;
    faculties: Ifaculty[]
}