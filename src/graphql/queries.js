/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      created_timestamp
      updated_timestamp
      timezone
      user_group
      email
      notifications {
        items {
          id
          user_id
          created_timestamp
          updated_timestamp
          status
          action
          type
          text
          link
        }
        nextToken
      }
      profile {
        user_id
        created_timestamp
        updated_timestamp
        name
        user_group
        description
        photo {
          name
          type
          bucket
          region
          key
        }
        cover_photo {
          name
          type
          bucket
          region
          key
        }
        dob
        field
        rating
        skills {
          nextToken
        }
        posts {
          nextToken
        }
        company_size
      }
      threads {
        items {
          id
          user_id
          created_timestamp
          updated_timestamp
        }
        nextToken
      }
      jobs {
        items {
          job_id
          user_id
          created_timestamp
          updated_timestamp
          status
        }
        nextToken
      }
      ideas {
        items {
          id
          user_id
          created_timestamp
          updated_timestamp
          title
          categories
          description
          rating
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        created_timestamp
        updated_timestamp
        timezone
        user_group
        email
        notifications {
          nextToken
        }
        profile {
          user_id
          created_timestamp
          updated_timestamp
          name
          user_group
          description
          dob
          field
          rating
          company_size
        }
        threads {
          nextToken
        }
        jobs {
          nextToken
        }
        ideas {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($user_id: ID!, $id: ID!) {
    getNotification(user_id: $user_id, id: $id) {
      id
      user_id
      created_timestamp
      updated_timestamp
      status
      action
      type
      text
      link
      picture {
        name
        type
        bucket
        region
        key
      }
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $user_id: ID
    $id: ModelIDKeyConditionInput
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listNotifications(
      user_id: $user_id
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        user_id
        created_timestamp
        updated_timestamp
        status
        action
        type
        text
        link
        picture {
          name
          type
          bucket
          region
          key
        }
      }
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($user_id: ID!) {
    getProfile(user_id: $user_id) {
      user_id
      created_timestamp
      updated_timestamp
      name
      user_group
      description
      photo {
        name
        type
        bucket
        region
        key
      }
      cover_photo {
        name
        type
        bucket
        region
        key
      }
      dob
      field
      rating
      skills {
        items {
          user_id
          type
          level
          name
          value
          description
        }
        nextToken
      }
      posts {
        items {
          id
          user_id
          created_timestamp
          updated_timestamp
          text
        }
        nextToken
      }
      company_size
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $user_id: ID
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProfiles(
      user_id: $user_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        user_id
        created_timestamp
        updated_timestamp
        name
        user_group
        description
        photo {
          name
          type
          bucket
          region
          key
        }
        cover_photo {
          name
          type
          bucket
          region
          key
        }
        dob
        field
        rating
        skills {
          nextToken
        }
        posts {
          nextToken
        }
        company_size
      }
      nextToken
    }
  }
`;
export const getThread = /* GraphQL */ `
  query GetThread($user_id: ID!, $id: ID!) {
    getThread(user_id: $user_id, id: $id) {
      id
      user_id
      created_timestamp
      updated_timestamp
      participants {
        items {
          user_id
          thread_id
          created_timestamp
        }
        nextToken
      }
      messages {
        items {
          id
          user_id
          thread_id
          created_timestamp
          updated_timestamp
          text
        }
        nextToken
      }
    }
  }
`;
export const listThreads = /* GraphQL */ `
  query ListThreads(
    $user_id: ID
    $id: ModelIDKeyConditionInput
    $filter: ModelThreadFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listThreads(
      user_id: $user_id
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        user_id
        created_timestamp
        updated_timestamp
        participants {
          nextToken
        }
        messages {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getJob = /* GraphQL */ `
  query GetJob($user_id: ID!, $id: ID!, $created_timestamp: Int!) {
    getJob(user_id: $user_id, id: $id, created_timestamp: $created_timestamp) {
      id
      user_id
      created_timestamp
      updated_timestamp
      title
      description
      status
      required_experience
      required_skill
      required_education
      required_personality
      candidates {
        items {
          job_id
          user_id
          created_timestamp
          updated_timestamp
          status
        }
        nextToken
      }
    }
  }
`;
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $user_id: ID
    $idCreated_timestamp: ModelJobPrimaryCompositeKeyConditionInput
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listJobs(
      user_id: $user_id
      idCreated_timestamp: $idCreated_timestamp
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        user_id
        created_timestamp
        updated_timestamp
        title
        description
        status
        required_experience
        required_skill
        required_education
        required_personality
        candidates {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getIdea = /* GraphQL */ `
  query GetIdea($user_id: ID!, $id: ID!) {
    getIdea(user_id: $user_id, id: $id) {
      id
      user_id
      created_timestamp
      updated_timestamp
      title
      categories
      description
      attachments {
        name
        type
        bucket
        region
        key
      }
      rating
      engagements {
        items {
          id
          user_id
          from_id
          referral_id
          created_timestamp
          updated_timestamp
          type
          source
          text
        }
        nextToken
      }
    }
  }
`;
export const listIdeas = /* GraphQL */ `
  query ListIdeas(
    $user_id: ID
    $id: ModelIDKeyConditionInput
    $filter: ModelIdeaFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listIdeas(
      user_id: $user_id
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        user_id
        created_timestamp
        updated_timestamp
        title
        categories
        description
        attachments {
          name
          type
          bucket
          region
          key
        }
        rating
        engagements {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($user_id: ID!, $type: SkillType!) {
    getSkill(user_id: $user_id, type: $type) {
      user_id
      type
      level
      name
      value
      description
    }
  }
`;
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $user_id: ID
    $type: ModelStringKeyConditionInput
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSkills(
      user_id: $user_id
      type: $type
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        user_id
        type
        level
        name
        value
        description
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($user_id: ID!, $id: ID!, $created_timestamp: Int!) {
    getPost(user_id: $user_id, id: $id, created_timestamp: $created_timestamp) {
      id
      user_id
      created_timestamp
      updated_timestamp
      text
      attachments {
        name
        type
        bucket
        region
        key
      }
      profile {
        user_id
        created_timestamp
        updated_timestamp
        name
        user_group
        description
        photo {
          name
          type
          bucket
          region
          key
        }
        cover_photo {
          name
          type
          bucket
          region
          key
        }
        dob
        field
        rating
        skills {
          nextToken
        }
        posts {
          nextToken
        }
        company_size
      }
      engagements {
        items {
          id
          user_id
          from_id
          referral_id
          created_timestamp
          updated_timestamp
          type
          source
          text
        }
        nextToken
      }
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $user_id: ID
    $idCreated_timestamp: ModelPostPrimaryCompositeKeyConditionInput
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPosts(
      user_id: $user_id
      idCreated_timestamp: $idCreated_timestamp
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        user_id
        created_timestamp
        updated_timestamp
        text
        attachments {
          name
          type
          bucket
          region
          key
        }
        profile {
          user_id
          created_timestamp
          updated_timestamp
          name
          user_group
          description
          dob
          field
          rating
          company_size
        }
        engagements {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getParticipant = /* GraphQL */ `
  query GetParticipant($user_id: ID!, $thread_id: ID!) {
    getParticipant(user_id: $user_id, thread_id: $thread_id) {
      user_id
      thread_id
      created_timestamp
      profile {
        user_id
        created_timestamp
        updated_timestamp
        name
        user_group
        description
        photo {
          name
          type
          bucket
          region
          key
        }
        cover_photo {
          name
          type
          bucket
          region
          key
        }
        dob
        field
        rating
        skills {
          nextToken
        }
        posts {
          nextToken
        }
        company_size
      }
    }
  }
`;
export const listParticipants = /* GraphQL */ `
  query ListParticipants(
    $user_id: ID
    $thread_id: ModelIDKeyConditionInput
    $filter: ModelParticipantFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listParticipants(
      user_id: $user_id
      thread_id: $thread_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        user_id
        thread_id
        created_timestamp
        profile {
          user_id
          created_timestamp
          updated_timestamp
          name
          user_group
          description
          dob
          field
          rating
          company_size
        }
      }
      nextToken
    }
  }
`;
export const getCandidate = /* GraphQL */ `
  query GetCandidate($user_id: ID!, $job_id: ID!, $status: CandidateStatus!) {
    getCandidate(user_id: $user_id, job_id: $job_id, status: $status) {
      job_id
      user_id
      created_timestamp
      updated_timestamp
      status
    }
  }
`;
export const listCandidates = /* GraphQL */ `
  query ListCandidates(
    $user_id: ID
    $job_idStatus: ModelCandidatePrimaryCompositeKeyConditionInput
    $filter: ModelCandidateFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCandidates(
      user_id: $user_id
      job_idStatus: $job_idStatus
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        job_id
        user_id
        created_timestamp
        updated_timestamp
        status
      }
      nextToken
    }
  }
`;
export const getEngagement = /* GraphQL */ `
  query GetEngagement($user_id: ID!, $referral_id: ID!) {
    getEngagement(user_id: $user_id, referral_id: $referral_id) {
      id
      user_id
      from_id
      referral_id
      created_timestamp
      updated_timestamp
      type
      source
      text
      from {
        user_id
        created_timestamp
        updated_timestamp
        name
        user_group
        description
        photo {
          name
          type
          bucket
          region
          key
        }
        cover_photo {
          name
          type
          bucket
          region
          key
        }
        dob
        field
        rating
        skills {
          nextToken
        }
        posts {
          nextToken
        }
        company_size
      }
    }
  }
`;
export const listEngagements = /* GraphQL */ `
  query ListEngagements(
    $user_id: ID
    $referral_id: ModelIDKeyConditionInput
    $filter: ModelEngagementFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEngagements(
      user_id: $user_id
      referral_id: $referral_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        user_id
        from_id
        referral_id
        created_timestamp
        updated_timestamp
        type
        source
        text
        from {
          user_id
          created_timestamp
          updated_timestamp
          name
          user_group
          description
          dob
          field
          rating
          company_size
        }
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($user_id: ID!, $thread_id: ID!, $created_timestamp: Int!) {
    getMessage(
      user_id: $user_id
      thread_id: $thread_id
      created_timestamp: $created_timestamp
    ) {
      id
      user_id
      thread_id
      created_timestamp
      updated_timestamp
      text
      attachments {
        name
        type
        bucket
        region
        key
      }
      profile {
        user_id
        created_timestamp
        updated_timestamp
        name
        user_group
        description
        photo {
          name
          type
          bucket
          region
          key
        }
        cover_photo {
          name
          type
          bucket
          region
          key
        }
        dob
        field
        rating
        skills {
          nextToken
        }
        posts {
          nextToken
        }
        company_size
      }
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $user_id: ID
    $thread_idCreated_timestamp: ModelMessagePrimaryCompositeKeyConditionInput
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMessages(
      user_id: $user_id
      thread_idCreated_timestamp: $thread_idCreated_timestamp
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        user_id
        thread_id
        created_timestamp
        updated_timestamp
        text
        attachments {
          name
          type
          bucket
          region
          key
        }
        profile {
          user_id
          created_timestamp
          updated_timestamp
          name
          user_group
          description
          dob
          field
          rating
          company_size
        }
      }
      nextToken
    }
  }
`;
