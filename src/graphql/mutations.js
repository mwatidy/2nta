/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
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
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
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
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
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
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
export const createThread = /* GraphQL */ `
  mutation CreateThread(
    $input: CreateThreadInput!
    $condition: ModelThreadConditionInput
  ) {
    createThread(input: $input, condition: $condition) {
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
export const updateThread = /* GraphQL */ `
  mutation UpdateThread(
    $input: UpdateThreadInput!
    $condition: ModelThreadConditionInput
  ) {
    updateThread(input: $input, condition: $condition) {
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
export const deleteThread = /* GraphQL */ `
  mutation DeleteThread(
    $input: DeleteThreadInput!
    $condition: ModelThreadConditionInput
  ) {
    deleteThread(input: $input, condition: $condition) {
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
export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
    createJob(input: $input, condition: $condition) {
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
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $input: UpdateJobInput!
    $condition: ModelJobConditionInput
  ) {
    updateJob(input: $input, condition: $condition) {
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
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
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
export const createIdea = /* GraphQL */ `
  mutation CreateIdea(
    $input: CreateIdeaInput!
    $condition: ModelIdeaConditionInput
  ) {
    createIdea(input: $input, condition: $condition) {
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
export const updateIdea = /* GraphQL */ `
  mutation UpdateIdea(
    $input: UpdateIdeaInput!
    $condition: ModelIdeaConditionInput
  ) {
    updateIdea(input: $input, condition: $condition) {
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
export const deleteIdea = /* GraphQL */ `
  mutation DeleteIdea(
    $input: DeleteIdeaInput!
    $condition: ModelIdeaConditionInput
  ) {
    deleteIdea(input: $input, condition: $condition) {
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
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
      user_id
      type
      level
      name
      value
      description
    }
  }
`;
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
      user_id
      type
      level
      name
      value
      description
    }
  }
`;
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
      user_id
      type
      level
      name
      value
      description
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createParticipant = /* GraphQL */ `
  mutation CreateParticipant(
    $input: CreateParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    createParticipant(input: $input, condition: $condition) {
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
export const updateParticipant = /* GraphQL */ `
  mutation UpdateParticipant(
    $input: UpdateParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    updateParticipant(input: $input, condition: $condition) {
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
export const deleteParticipant = /* GraphQL */ `
  mutation DeleteParticipant(
    $input: DeleteParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    deleteParticipant(input: $input, condition: $condition) {
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
export const createCandidate = /* GraphQL */ `
  mutation CreateCandidate(
    $input: CreateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    createCandidate(input: $input, condition: $condition) {
      job_id
      user_id
      created_timestamp
      updated_timestamp
      status
    }
  }
`;
export const updateCandidate = /* GraphQL */ `
  mutation UpdateCandidate(
    $input: UpdateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    updateCandidate(input: $input, condition: $condition) {
      job_id
      user_id
      created_timestamp
      updated_timestamp
      status
    }
  }
`;
export const deleteCandidate = /* GraphQL */ `
  mutation DeleteCandidate(
    $input: DeleteCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    deleteCandidate(input: $input, condition: $condition) {
      job_id
      user_id
      created_timestamp
      updated_timestamp
      status
    }
  }
`;
export const createEngagement = /* GraphQL */ `
  mutation CreateEngagement(
    $input: CreateEngagementInput!
    $condition: ModelEngagementConditionInput
  ) {
    createEngagement(input: $input, condition: $condition) {
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
export const updateEngagement = /* GraphQL */ `
  mutation UpdateEngagement(
    $input: UpdateEngagementInput!
    $condition: ModelEngagementConditionInput
  ) {
    updateEngagement(input: $input, condition: $condition) {
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
export const deleteEngagement = /* GraphQL */ `
  mutation DeleteEngagement(
    $input: DeleteEngagementInput!
    $condition: ModelEngagementConditionInput
  ) {
    deleteEngagement(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
