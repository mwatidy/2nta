/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification {
    onCreateNotification {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification {
    onUpdateNotification {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification {
    onDeleteNotification {
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
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
export const onCreateThread = /* GraphQL */ `
  subscription OnCreateThread {
    onCreateThread {
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
export const onUpdateThread = /* GraphQL */ `
  subscription OnUpdateThread {
    onUpdateThread {
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
export const onDeleteThread = /* GraphQL */ `
  subscription OnDeleteThread {
    onDeleteThread {
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
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob {
    onCreateJob {
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
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob {
    onUpdateJob {
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
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob {
    onDeleteJob {
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
export const onCreateIdea = /* GraphQL */ `
  subscription OnCreateIdea {
    onCreateIdea {
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
export const onUpdateIdea = /* GraphQL */ `
  subscription OnUpdateIdea {
    onUpdateIdea {
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
export const onDeleteIdea = /* GraphQL */ `
  subscription OnDeleteIdea {
    onDeleteIdea {
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill {
    onCreateSkill {
      user_id
      type
      level
      name
      value
      description
    }
  }
`;
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill {
    onUpdateSkill {
      user_id
      type
      level
      name
      value
      description
    }
  }
`;
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill {
    onDeleteSkill {
      user_id
      type
      level
      name
      value
      description
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateParticipant = /* GraphQL */ `
  subscription OnCreateParticipant {
    onCreateParticipant {
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
export const onUpdateParticipant = /* GraphQL */ `
  subscription OnUpdateParticipant {
    onUpdateParticipant {
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
export const onDeleteParticipant = /* GraphQL */ `
  subscription OnDeleteParticipant {
    onDeleteParticipant {
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
export const onCreateCandidate = /* GraphQL */ `
  subscription OnCreateCandidate {
    onCreateCandidate {
      job_id
      user_id
      created_timestamp
      updated_timestamp
      status
    }
  }
`;
export const onUpdateCandidate = /* GraphQL */ `
  subscription OnUpdateCandidate {
    onUpdateCandidate {
      job_id
      user_id
      created_timestamp
      updated_timestamp
      status
    }
  }
`;
export const onDeleteCandidate = /* GraphQL */ `
  subscription OnDeleteCandidate {
    onDeleteCandidate {
      job_id
      user_id
      created_timestamp
      updated_timestamp
      status
    }
  }
`;
export const onCreateEngagement = /* GraphQL */ `
  subscription OnCreateEngagement {
    onCreateEngagement {
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
export const onUpdateEngagement = /* GraphQL */ `
  subscription OnUpdateEngagement {
    onUpdateEngagement {
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
export const onDeleteEngagement = /* GraphQL */ `
  subscription OnDeleteEngagement {
    onDeleteEngagement {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
