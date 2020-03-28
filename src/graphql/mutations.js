/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      dateJoined
      name
      email
      group
      profile {
        ... on User_Profile {
          lastUpdate
          gender
          dob
          about
          location
          photo {
            id
            type
            src
          }
          coverPhoto {
            id
            type
            src
          }
          experience {
            copmany
            job_title
            job_description
            years
          }
          education {
            title
            institute
            degree
            start_date
            end_date
          }
          skills {
            name
            experience_in_month
          }
          personality {
            openness
            conscientiousness
            extraversion
            agreeableness
            neuroticism
          }
        }
        ... on Company_Profile {
          lastUpdate
          about
          location
          photo {
            id
            type
            src
          }
          coverPhoto {
            id
            type
            src
          }
          industry
          age
          size
        }
      }
      rating
      notifications {
        id
        timestamp
        active
        read
        data {
          type
          attach_id
          description
          actions
        }
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      dateJoined
      name
      email
      group
      profile {
        ... on User_Profile {
          lastUpdate
          gender
          dob
          about
          location
          photo {
            id
            type
            src
          }
          coverPhoto {
            id
            type
            src
          }
          experience {
            copmany
            job_title
            job_description
            years
          }
          education {
            title
            institute
            degree
            start_date
            end_date
          }
          skills {
            name
            experience_in_month
          }
          personality {
            openness
            conscientiousness
            extraversion
            agreeableness
            neuroticism
          }
        }
        ... on Company_Profile {
          lastUpdate
          about
          location
          photo {
            id
            type
            src
          }
          coverPhoto {
            id
            type
            src
          }
          industry
          age
          size
        }
      }
      rating
      notifications {
        id
        timestamp
        active
        read
        data {
          type
          attach_id
          description
          actions
        }
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      dateJoined
      name
      email
      group
      profile {
        ... on User_Profile {
          lastUpdate
          gender
          dob
          about
          location
          photo {
            id
            type
            src
          }
          coverPhoto {
            id
            type
            src
          }
          experience {
            copmany
            job_title
            job_description
            years
          }
          education {
            title
            institute
            degree
            start_date
            end_date
          }
          skills {
            name
            experience_in_month
          }
          personality {
            openness
            conscientiousness
            extraversion
            agreeableness
            neuroticism
          }
        }
        ... on Company_Profile {
          lastUpdate
          about
          location
          photo {
            id
            type
            src
          }
          coverPhoto {
            id
            type
            src
          }
          industry
          age
          size
        }
      }
      rating
      notifications {
        id
        timestamp
        active
        read
        data {
          type
          attach_id
          description
          actions
        }
      }
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      timestamp
      user {
        id
        name
        photo
      }
      description
      likes {
        id
        name
        photo
      }
      comments {
        timestamp
        from {
          id
          name
          photo
        }
        text
        likes {
          id
          name
          photo
        }
      }
      media {
        id
        type
        src
      }
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      timestamp
      user {
        id
        name
        photo
      }
      description
      likes {
        id
        name
        photo
      }
      comments {
        timestamp
        from {
          id
          name
          photo
        }
        text
        likes {
          id
          name
          photo
        }
      }
      media {
        id
        type
        src
      }
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      timestamp
      user {
        id
        name
        photo
      }
      description
      likes {
        id
        name
        photo
      }
      comments {
        timestamp
        from {
          id
          name
          photo
        }
        text
        likes {
          id
          name
          photo
        }
      }
      media {
        id
        type
        src
      }
    }
  }
`;
export const createThread = /* GraphQL */ `
  mutation CreateThread(
    $input: CreateThreadInput!
    $condition: ModelThreadConditionInput
  ) {
    createThread(input: $input, condition: $condition) {
      id
      users {
        id
        name
        photo
      }
      threads {
        timestamp
        from {
          id
          name
          photo
        }
        to {
          id
          name
          photo
        }
        text
        attachments {
          id
          type
          src
        }
      }
    }
  }
`;
export const updateThread = /* GraphQL */ `
  mutation UpdateThread(
    $input: UpdateThreadInput!
    $condition: ModelThreadConditionInput
  ) {
    updateThread(input: $input, condition: $condition) {
      id
      users {
        id
        name
        photo
      }
      threads {
        timestamp
        from {
          id
          name
          photo
        }
        to {
          id
          name
          photo
        }
        text
        attachments {
          id
          type
          src
        }
      }
    }
  }
`;
export const deleteThread = /* GraphQL */ `
  mutation DeleteThread(
    $input: DeleteThreadInput!
    $condition: ModelThreadConditionInput
  ) {
    deleteThread(input: $input, condition: $condition) {
      id
      users {
        id
        name
        photo
      }
      threads {
        timestamp
        from {
          id
          name
          photo
        }
        to {
          id
          name
          photo
        }
        text
        attachments {
          id
          type
          src
        }
      }
    }
  }
`;
export const createIdea = /* GraphQL */ `
  mutation CreateIdea(
    $input: CreateIdeaInput!
    $condition: ModelIdeaConditionInput
  ) {
    createIdea(input: $input, condition: $condition) {
      id
      owner {
        id
        name
        photo
      }
      date_added
      title
      details
      category
      sub_category
      gallery {
        id
        type
        src
      }
      rating
      comments {
        timestamp
        from {
          id
          name
          photo
        }
        text
        likes {
          id
          name
          photo
        }
      }
    }
  }
`;
export const updateIdea = /* GraphQL */ `
  mutation UpdateIdea(
    $input: UpdateIdeaInput!
    $condition: ModelIdeaConditionInput
  ) {
    updateIdea(input: $input, condition: $condition) {
      id
      owner {
        id
        name
        photo
      }
      date_added
      title
      details
      category
      sub_category
      gallery {
        id
        type
        src
      }
      rating
      comments {
        timestamp
        from {
          id
          name
          photo
        }
        text
        likes {
          id
          name
          photo
        }
      }
    }
  }
`;
export const deleteIdea = /* GraphQL */ `
  mutation DeleteIdea(
    $input: DeleteIdeaInput!
    $condition: ModelIdeaConditionInput
  ) {
    deleteIdea(input: $input, condition: $condition) {
      id
      owner {
        id
        name
        photo
      }
      date_added
      title
      details
      category
      sub_category
      gallery {
        id
        type
        src
      }
      rating
      comments {
        timestamp
        from {
          id
          name
          photo
        }
        text
        likes {
          id
          name
          photo
        }
      }
    }
  }
`;
export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
    createJob(input: $input, condition: $condition) {
      id
      timestamp
      published
      company {
        id
        name
        photo
      }
      status
      description
      experience_required {
        copmany
        job_title
        job_description
        years
      }
      education_required {
        title
        institute
        degree
        start_date
        end_date
      }
      personality_required {
        openness
        conscientiousness
        extraversion
        agreeableness
        neuroticism
      }
      skill_required {
        name
        experience_in_month
      }
      applicants {
        id
        name
        photo
      }
    }
  }
`;
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $input: UpdateJobInput!
    $condition: ModelJobConditionInput
  ) {
    updateJob(input: $input, condition: $condition) {
      id
      timestamp
      published
      company {
        id
        name
        photo
      }
      status
      description
      experience_required {
        copmany
        job_title
        job_description
        years
      }
      education_required {
        title
        institute
        degree
        start_date
        end_date
      }
      personality_required {
        openness
        conscientiousness
        extraversion
        agreeableness
        neuroticism
      }
      skill_required {
        name
        experience_in_month
      }
      applicants {
        id
        name
        photo
      }
    }
  }
`;
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
      id
      timestamp
      published
      company {
        id
        name
        photo
      }
      status
      description
      experience_required {
        copmany
        job_title
        job_description
        years
      }
      education_required {
        title
        institute
        degree
        start_date
        end_date
      }
      personality_required {
        openness
        conscientiousness
        extraversion
        agreeableness
        neuroticism
      }
      skill_required {
        name
        experience_in_month
      }
      applicants {
        id
        name
        photo
      }
    }
  }
`;
