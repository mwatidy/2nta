/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateThread = /* GraphQL */ `
  subscription OnCreateThread {
    onCreateThread {
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
export const onUpdateThread = /* GraphQL */ `
  subscription OnUpdateThread {
    onUpdateThread {
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
export const onDeleteThread = /* GraphQL */ `
  subscription OnDeleteThread {
    onDeleteThread {
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
export const onCreateIdea = /* GraphQL */ `
  subscription OnCreateIdea {
    onCreateIdea {
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
export const onUpdateIdea = /* GraphQL */ `
  subscription OnUpdateIdea {
    onUpdateIdea {
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
export const onDeleteIdea = /* GraphQL */ `
  subscription OnDeleteIdea {
    onDeleteIdea {
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
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob {
    onCreateJob {
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
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob {
    onUpdateJob {
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
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob {
    onDeleteJob {
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
