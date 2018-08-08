

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateBlogGQL
// ====================================================

export interface CreateBlogGQL_CreateBlog {
  state: boolean | null;
}

export interface CreateBlogGQL {
  CreateBlog: CreateBlogGQL_CreateBlog | null;
}

export interface CreateBlogGQLVariables {
  title: string;
  content: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogGQL
// ====================================================

export interface BlogGQL_blog_user {
  username: string;  // Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
  displayName: string | null;
}

export interface BlogGQL_blog {
  title: string;
  content: string;
  view: number;
  vote: number;
  createTime: any;
  user: BlogGQL_blog_user | null;
}

export interface BlogGQL {
  blog: BlogGQL_blog | null;
}

export interface BlogGQLVariables {
  slug: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ComemntsGQL
// ====================================================

export interface ComemntsGQL_blogDiscussionList_discussionList_user {
  username: string;  // Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
  displayName: string | null;
  gravataremail: string | null;
}

export interface ComemntsGQL_blogDiscussionList_discussionList_reply_user {
  username: string;  // Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
  displayName: string | null;
  gravataremail: string | null;
}

export interface ComemntsGQL_blogDiscussionList_discussionList_reply {
  pk: string | null;
  submitTime: any | null;
  content: string | null;
  user: ComemntsGQL_blogDiscussionList_discussionList_reply_user | null;
  vote: number;
  attitude: string | null;
}

export interface ComemntsGQL_blogDiscussionList_discussionList {
  user: ComemntsGQL_blogDiscussionList_discussionList_user | null;
  content: string | null;
  submitTime: any | null;
  vote: number | null;
  pk: string | null;
  attitude: string | null;
  reply: (ComemntsGQL_blogDiscussionList_discussionList_reply | null)[] | null;
}

export interface ComemntsGQL_blogDiscussionList {
  maxpage: number;
  discussionList: (ComemntsGQL_blogDiscussionList_discussionList | null)[] | null;
}

export interface ComemntsGQL {
  blogDiscussionList: ComemntsGQL_blogDiscussionList | null;
}

export interface ComemntsGQLVariables {
  page: number;
  slug: string;
  time?: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BLogListGQL
// ====================================================

export interface BLogListGQL_blogList_blogList {
  id: string;
  title: string;
  vote: number;
  view: number;
  slug: string;
}

export interface BLogListGQL_blogList {
  maxpage: number;
  blogList: (BLogListGQL_blogList_blogList | null)[] | null;
}

export interface BLogListGQL {
  blogList: BLogListGQL_blogList | null;
}

export interface BLogListGQLVariables {
  page: number;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LanguageList
// ====================================================

export interface LanguageList {
  allLanguage: any | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProblemDetailGQL
// ====================================================

export interface ProblemDetailGQL_problem_sampleSet {
  inputContent: string | null;
  outputContent: string | null;
}

export interface ProblemDetailGQL_problem {
  problemId: string;
  title: string;
  content: string;
  standardInput: string;
  standardOutput: string;
  constraints: string;
  resource: string;
  note: string;
  timeLimit: number;
  memoryLimit: number;
  sampleSet: (ProblemDetailGQL_problem_sampleSet | null)[] | null;
  visible: boolean;
  discussionvisible: boolean;
}

export interface ProblemDetailGQL {
  problem: ProblemDetailGQL_problem | null;
}

export interface ProblemDetailGQLVariables {
  slug: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateProblem
// ====================================================

export interface UpdateProblem_UpdateProblem {
  state: boolean | null;
}

export interface UpdateProblem {
  UpdateProblem: UpdateProblem_UpdateProblem | null;
}

export interface UpdateProblemVariables {
  title: string;
  content: string;
  note: string;
  timeLimit: number;
  memoryLimit: number;
  constraints: string;
  resource: string;
  standardInput: string;
  standardOutput: string;
  slug: string;
  samples: string;
  discussionvisible: boolean;
  visible: boolean;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProblemListGQL
// ====================================================

export interface ProblemListGQL_problemList_problemList {
  problemId: string;
  title: string;
  submit: number;
  accept: number;
  slug: string;
  resource: string;
}

export interface ProblemListGQL_problemList {
  maxpage: number;
  problemList: (ProblemListGQL_problemList_problemList | null)[] | null;
}

export interface ProblemListGQL {
  problemList: ProblemListGQL_problemList | null;
}

export interface ProblemListGQLVariables {
  page: number;
  filter?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProblemSearchGQL
// ====================================================

export interface ProblemSearchGQL_problemSearch_problemList {
  title: string;
}

export interface ProblemSearchGQL_problemSearch {
  problemList: (ProblemSearchGQL_problemSearch_problemList | null)[] | null;
}

export interface ProblemSearchGQL {
  problemSearch: ProblemSearchGQL_problemSearch | null;
}

export interface ProblemSearchGQLVariables {
  filter?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterGQL
// ====================================================

export interface RegisterGQL_register_user {
  displayName: string | null;
  gravataremail: string | null;
  school: string;
  company: string;
  location: string;
  about: string;
  group: string | null;
}

export interface RegisterGQL_register {
  token: string | null;
  payload: any | null;
  permission: any | null;
  user: RegisterGQL_register_user | null;
}

export interface RegisterGQL {
  register: RegisterGQL_register | null;
}

export interface RegisterGQLVariables {
  username: string;
  password: string;
  email: string;
  displayName: string;
  school?: string | null;
  company?: string | null;
  location?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserLogin
// ====================================================

export interface UserLogin_userLogin_user {
  displayName: string | null;
  gravataremail: string | null;
  school: string;
  company: string;
  location: string;
  about: string;
  group: string | null;
}

export interface UserLogin_userLogin {
  token: string | null;
  payload: any | null;
  permission: any | null;
  user: UserLogin_userLogin_user | null;
}

export interface UserLogin {
  userLogin: UserLogin_userLogin | null;
}

export interface UserLoginVariables {
  username: string;
  password: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: VerifyToken
// ====================================================

export interface VerifyToken_verifyToken {
  payload: any | null;
}

export interface VerifyToken {
  verifyToken: VerifyToken_verifyToken | null;
}

export interface VerifyTokenVariables {
  token: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RefreshToken
// ====================================================

export interface RefreshToken_UserTokenRefresh_user {
  displayName: string | null;
  gravataremail: string | null;
  school: string;
  company: string;
  location: string;
  about: string;
  group: string | null;
}

export interface RefreshToken_UserTokenRefresh {
  token: string | null;
  payload: any | null;
  permission: any | null;
  user: RefreshToken_UserTokenRefresh_user | null;
}

export interface RefreshToken {
  UserTokenRefresh: RefreshToken_UserTokenRefresh | null;
}

export interface RefreshTokenVariables {
  token: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SubmissionListGQL
// ====================================================

export interface SubmissionListGQL_submissionList_submissionList_user {
  gravataremail: string | null;
  displayName: string | null;
}

export interface SubmissionListGQL_submissionList_submissionList_problem {
  title: string;
}

export interface SubmissionListGQL_submissionList_submissionList {
  submissionId: string;
  failedCase: number | null;
  submitTime: any | null;
  user: SubmissionListGQL_submissionList_submissionList_user | null;
  problem: SubmissionListGQL_submissionList_submissionList_problem | null;
  judgeStatus: string;
  language: string;
  color: string | null;
  timeCost: number;
  memoryCost: number;
}

export interface SubmissionListGQL_submissionList {
  maxpage: number;
  submissionList: (SubmissionListGQL_submissionList_submissionList | null)[] | null;
}

export interface SubmissionListGQL {
  submissionList: SubmissionListGQL_submissionList | null;
}

export interface SubmissionListGQLVariables {
  page: number;
  date: string;
  pk?: string | null;
  user?: string | null;
  problem?: string | null;
  judgeStatus?: string | null;
  language?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SubmitSolution
// ====================================================

export interface SubmitSolution_SubmitSolution {
  pk: string | null;
}

export interface SubmitSolution {
  SubmitSolution: SubmitSolution_SubmitSolution | null;
}

export interface SubmitSolutionVariables {
  code: string;
  problemslug: string;
  language: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserListGQL
// ====================================================

export interface UserListGQL_userList_userList {
  username: string;  // Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
  gravataremail: string | null;
  displayName: string | null;
  school: string;
  company: string;
  location: string;
  about: string;
}

export interface UserListGQL_userList {
  maxpage: number;
  userList: (UserListGQL_userList_userList | null)[] | null;
}

export interface UserListGQL {
  userList: UserListGQL_userList | null;
}

export interface UserListGQLVariables {
  page: number;
  filter?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProfileGQL
// ====================================================

export interface ProfileGQL_user {
  heatmap: any | null;
  analysis: any | null;
  displayName: string | null;
  gravataremail: string | null;
  group: string | null;
  school: string;
  company: string;
  location: string;
  about: string;
}

export interface ProfileGQL {
  user: ProfileGQL_user | null;
}

export interface ProfileGQLVariables {
  username: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserSearchGQL
// ====================================================

export interface UserSearchGQL_userSearch_userList {
  displayName: string | null;
}

export interface UserSearchGQL_userSearch {
  userList: (UserSearchGQL_userSearch_userList | null)[] | null;
}

export interface UserSearchGQL {
  userSearch: UserSearchGQL_userSearch | null;
}

export interface UserSearchGQLVariables {
  filter?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserProfileGQL
// ====================================================

export interface UserProfileGQL_user {
  displayName: string | null;
  school: string;
  company: string;
  location: string;
  about: string;
  group: string | null;
}

export interface UserProfileGQL {
  user: UserProfileGQL_user | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserInfoUpdateGQL
// ====================================================

export interface UserInfoUpdateGQL_UserInfoUpdate {
  state: boolean | null;
}

export interface UserInfoUpdateGQL {
  UserInfoUpdate: UserInfoUpdateGQL_UserInfoUpdate | null;
}

export interface UserInfoUpdateGQLVariables {
  company: string;
  displayName: string;
  about: string;
  school: string;
  location: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: VoteDiscussionGQL
// ====================================================

export interface VoteDiscussionGQL_UpdateDiscussionVote {
  vote: number | null;
  result: string | null;
}

export interface VoteDiscussionGQL {
  UpdateDiscussionVote: VoteDiscussionGQL_UpdateDiscussionVote | null;
}

export interface VoteDiscussionGQLVariables {
  pk: string;
  attitude: boolean;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================