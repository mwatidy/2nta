/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const user = /* GraphQL */ `
  query User($id: ID!) {
    user(id: $id) {
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
export const idea = /* GraphQL */ `
  query Idea($id: ID!) {
    idea(id: $id) {
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
export const ideas = /* GraphQL */ `
  query Ideas {
    ideas {
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
export const thread = /* GraphQL */ `
  query Thread($id: ID!) {
    thread(id: $id) {
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
export const threads = /* GraphQL */ `
  query Threads {
    threads {
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
export const job = /* GraphQL */ `
  query Job($id: ID!) {
    job(id: $id) {
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
export const jobs = /* GraphQL */ `
  query Jobs {
    jobs {
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
export const post = /* GraphQL */ `
  query Post($id: ID!) {
    post(id: $id) {
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
export const posts = /* GraphQL */ `
  query Posts {
    posts {
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          }
          ... on Company_Profile {
            lastUpdate
            about
            location
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
        }
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          text
        }
        media {
          id
          type
          src
        }
      }
      nextToken
    }
  }
`;
export const getThread = /* GraphQL */ `
  query GetThread($id: ID!) {
    getThread(id: $id) {
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
export const listThreads = /* GraphQL */ `
  query ListThreads(
    $filter: ModelThreadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThreads(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        users {
          id
          name
          photo
        }
        threads {
          timestamp
          text
        }
      }
      nextToken
    }
  }
`;
export const getIdea = /* GraphQL */ `
  query GetIdea($id: ID!) {
    getIdea(id: $id) {
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
export const listIdeas = /* GraphQL */ `
  query ListIdeas(
    $filter: ModelIdeaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIdeas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          text
        }
      }
      nextToken
    }
  }
`;
export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
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
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
