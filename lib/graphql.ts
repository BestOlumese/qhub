import { gql } from "@apollo/client";

export const CREATE_ORGANIZATION = gql`
  mutation CreateOrganization($input: OrganizationInput!) {
    createOrganization(organizationInput: $input) {
      _id
      address
      city
      country
      email
      industry {
        type
      }
      logo
      name
      numberOfUsers
      state
      websiteUrl
      createdAt
    }
  }
`;

export const USER_ORGANIZATION = gql`
  query {
    userOrganization {
      _id
      logo
    }
  }
`;

export const CREATE_USER_ORGANIZATION = gql`
  mutation CreateOrganization($input: CreateUserAdminInput!) {
    addOrganizationUser(createUserOrganizationInput: $input) {
      _id
      firstName
      lastName
      email
      accessToken
      phone
      role
      createdAt
    }
  }
`;

export const LOGIN = gql`
  mutation Login($input: LogintInput!) {
    login(loginInput: $input) {
      accessToken
      user {
        firstName
        lastName
        email
        accessToken
        phone
        role
        createdAt
      }
    }
  }
`;

export const VERIFY_USER = gql`
  mutation VerifyUser($input: VerifyUserInput!) {
    verifyUser(verifyUser: $input) {
      message
      status
    }
  }
`;

export const ADD_COURSE = gql`
  mutation AddCourse($courseInput: CourseInput!) {
    addCourse(courseInput: $courseInput) {
      _id
      title
    }
  }
`;

export const ADD_COURSE_MODULE = gql`
  mutation AddCourseModule($courseModuleInput: CourseModuleInput!) {
    addCourseModule(courseModuleInput: $courseModuleInput) {
      _id
      name
    }
  }
`;

export const EDIT_COURSE_MODULE = gql`
  mutation EditCourseModule($editCourseModuleInput: EditCourseModuleInput!) {
    editCourseModule(editCourseModuleInput: $editCourseModuleInput) {
      _id
      name
    }
  }
`;

export const DELETE_COURSE_MODULE = gql`
  mutation DeleteCourseModule($moduleId: String!) {
    deleteCourseModule(moduleId: $moduleId) {
      message
      status
    }
  }
`;

export const ADD_LESSON = gql`
  mutation AddLesson($lessonInput: LessonInput!) {
    addLesson(lessonInput: $lessonInput) {
      _id
      name
      contentUrl
      videoUrl
      imageUrl
      extraResourcesUrl
      index
    }
  }
`;

export const EDIT_LESSON = gql`
  mutation EditLesson($editLessonInput: EditLessonInput!) {
    editLesson(editLessonInput: $editLessonInput) {
      _id
      name
      contentUrl
      videoUrl
      imageUrl
      extraResourcesUrl
      index
    }
  }
`;

export const DELETE_LESSON = gql`
  mutation DeleteLesson($lessonId: String!) {
    deleteLesson(lessonId: $lessonId)
  }
`;

export const ADD_QUIZ = gql`
  mutation AddModuleQuiz($quizInput: QuizInput!) {
    addModuleQuiz(quizInput: $quizInput) {
      _id
      title
    }
  }
`;

export const ADD_LMS_USER = gql`
  mutation AddLmsUser($lmsUserInput: CreateLmsUserInput!) {
    addLmsUser(lmsUserInput: $lmsUserInput) {
      _id
      firstName
      lastName
      role
    }
  }
`;

export const LMS_USER_ONBOARDING = gql`
  mutation CompleteOnBoarding(
    $completeOnboardingDetails: CompleteOnBoardingDetails!
  ) {
    completeOnboarding(completeOnboardingDetails: $completeOnboardingDetails) {
      _id
      firstName
      lastName
      role
    }
  }
`;

export const GET_ORGANIZATION_USERS = gql`
  query GetOrganizationUsers($organizationId: String!) {
    getOrganizationUsers(organizationId: $organizationId) {
      _id
      email
      firstName
      lastName
      onboarded
      role
      createdAt
    }
  }
`;

export const GET_ORGANIZATION_COURSES = gql`
  query GetOrganizationCourses($organizationId: String!) {
    getOrganizationCourses(organizationId: $organizationId) {
      course {
        _id
        title
        category
        createdAt
        updatedAt
        duration
        description
        displayImageUrl
        introVideoUrl
      }
      enrollment {
        _id
        completed
        course {
          _id
          title
          category
          createdAt
          updatedAt
          duration
          description
          displayImageUrl
          introVideoUrl
        }
        createdAt
        progress
        updatedAt
      }
    }
  }
`;

export const GET_ORGANIZATION_COURSE_BY_ID = gql`
  query GetCourseById($courseId: String!) {
    getCourseById(courseId: $courseId) {
      course {
        _id
        title
        category
        createdAt
        updatedAt
        duration
        description
        displayImageUrl
        introVideoUrl
      }
      enrollment {
        _id
        completed
        course {
          _id
          title
          category
          createdAt
          updatedAt
          duration
          description
          displayImageUrl
          introVideoUrl
        }
        createdAt
        progress
        updatedAt
      }
    }
  }
`;

export const GET_COURSE_MODULES = gql`
  query GetModulesForCourse($courseId: String!) {
    getModulesForCourse(courseId: $courseId) {
      _id
      name
      summary
      course {
        _id
        title
        category
        createdAt
        updatedAt
        duration
        description
        displayImageUrl
        introVideoUrl
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_COURSE_MODULE_BY_ID = gql`
  query GetCourseModuleById($courseModuleId: String!) {
    getCourseModuleById(courseModuleId: $courseModuleId) {
      _id
      name
      summary
      course {
        _id
        title
        category
        createdAt
        updatedAt
        duration
        description
        displayImageUrl
        introVideoUrl
      }
      createdAt
      updatedAt
    }
  }
`;

export const ENROLL_COURSE = gql`
  mutation EnrollCourse($courseId: String!) {
    enrollCourse(courseId: $courseId) {
      message
    }
  }
`;