export type UserRole =
  | "PLATFORM_ADMIN"
  | "ORG_OWNER"
  | "ORG_ADMIN"
  | "PROGRAM_MANAGER"
  | "PARTICIPANT"
  | "TEAM_LEAD"
  | "MENTOR"
  | "JUDGE"
  | "SPONSOR";

export type ProgramStatus =
  | "DRAFT"
  | "APPLICATIONS_OPEN"
  | "TEAM_FORMATION"
  | "BUILDING"
  | "SUBMISSIONS_OPEN"
  | "JUDGING"
  | "FINALISTS"
  | "COMPLETED"
  | "ARCHIVED";

export type ApplicationStatus =
  | "DRAFT"
  | "SUBMITTED"
  | "UNDER_REVIEW"
  | "ACCEPTED"
  | "WAITLISTED"
  | "REJECTED"
  | "WITHDRAWN"
  | "CHECKED_IN";

export type ProjectPipelineStage =
  | "IDEA"
  | "BUILDING"
  | "SUBMITTED"
  | "FINALIST"
  | "WINNER"
  | "VALIDATION"
  | "PILOT"
  | "INCUBATION"
  | "IMPLEMENTATION"
  | "STARTUP"
  | "ARCHIVED";

export type ProgramFormat = "PRESENCIAL" | "HIBRIDO" | "ONLINE";

export interface ProgramTheme {
  primary: string; // e.g. '#2563EB'
  accent: string;  // e.g. '#38BDF8'
  badgeBg: string; // e.g. 'bg-blue-50 text-blue-700'
  gradient: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: "TITLE" | "TECHNOLOGY" | "CHALLENGE" | "COMMUNITY";
  perks: string;
  website: string;
}

export interface Challenge {
  id: string;
  programId: string;
  title: string;
  shortDescription: string;
  problem: string;
  context: string;
  objective: string;
  expectedOutcome: string;
  recommendedTech: string[];
  deliverables: string[];
  prizePool: string;
  sponsorName?: string;
  trackNumber: string;
}

export interface RubricCriterion {
  id: string;
  name: string;
  description: string;
  weight: number; // e.g. 25 for 25%
  maxScore: number; // e.g. 10
  guidelines: { [score: number]: string };
}

export interface ScheduleEvent {
  id: string;
  programId: string;
  day: number;
  date: string;
  time: string;
  title: string;
  type: "OPENING" | "WORKSHOP" | "MENTORSHIP" | "DEADLINE" | "JUDGING" | "PITCH" | "NETWORKING";
  location: string;
  speaker?: string;
  isLive?: boolean;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  oneLiner: string;
  organizationId: string;
  organizationName: string;
  coverImage: string;
  logo: string;
  status: ProgramStatus;
  format: ProgramFormat;
  city: string;
  country: string;
  startDate: string;
  endDate: string;
  applicationDeadline: string;
  prizePool: string;
  category: "AI" | "Fintech" | "Climate" | "GovTech" | "Health" | "Data" | "Cybersecurity" | "Social Impact";
  theme: ProgramTheme;
  description: string;
  whyParticipate: string[];
  eligibility: string[];
  stats: {
    views: number;
    applications: number;
    accepted: number;
    checkedIn: number;
    teams: number;
    submissions: number;
    finalists: number;
  };
  challenges: Challenge[];
  rubric: RubricCriterion[];
  sponsors: Sponsor[];
}

export interface BuilderProfile {
  id: string;
  handle: string;
  name: string;
  avatar: string;
  headline: string;
  city: string;
  country: string;
  role: "Frontend" | "Backend" | "Fullstack" | "AI/ML" | "Product" | "UX/Design" | "Data Science" | "Business";
  skills: string[];
  github?: string;
  linkedin?: string;
  website?: string;
  lookingForTeam: boolean;
  stats: {
    hackathons: number;
    projects: number;
    finalist: number;
    wins: number;
  };
  verifiedBadges: Array<{
    id: string;
    label: string;
    programTitle: string;
    year: string;
    type: "WINNER" | "FINALIST" | "MENTOR" | "CONTRIBUTOR";
  }>;
}

export interface TeamMember {
  builderId: string;
  name: string;
  handle: string;
  avatar: string;
  role: string;
  isLead: boolean;
}

export interface Team {
  id: string;
  programId: string;
  name: string;
  challengeId: string;
  challengeTitle: string;
  members: TeamMember[];
  lookingForRoles: string[];
  skillsCoverage: {
    backend: boolean;
    frontend: boolean;
    ai: boolean;
    design: boolean;
    product: boolean;
  };
  submissionId?: string;
  mentorAssigned?: string;
  inviteCode: string;
}

export interface ProjectSubmission {
  id: string;
  programId: string;
  teamId: string;
  teamName: string;
  title: string;
  oneLinePitch: string;
  problem: string;
  solution: string;
  impact: string;
  architecture: string;
  stack: string[];
  demoUrl: string;
  repoUrl: string;
  videoUrl?: string;
  deckUrl?: string;
  screenshots: string[];
  aiDisclosure: string;
  completenessPercent: number;
  pipelineStage: ProjectPipelineStage;
  scores: {
    averageScore: number;
    evaluationsCount: number;
    variance: number;
  };
  awardPlacement?: string;
  createdAt: string;
  updatedAt: string;
}

export interface JudgeEvaluation {
  id: string;
  judgeId: string;
  judgeName: string;
  projectId: string;
  programId: string;
  scores: Record<string, number>; // criterionId -> score (1-10)
  comments: string;
  privateNotes: string;
  hasConflict: boolean;
  submittedAt?: string;
  isCompleted: boolean;
}

export interface Mentor {
  id: string;
  name: string;
  avatar: string;
  company: string;
  role: string;
  skills: string[];
  status: "CONFIRMED" | "AVAILABLE" | "IN_SESSION" | "COMPLETED";
  assignedTeamIds: string[];
  totalSessions: number;
}

export interface MentorSession {
  id: string;
  mentorId: string;
  teamId: string;
  teamName: string;
  programId: string;
  time: string;
  topic: string;
  notes?: string;
  status: "SCHEDULED" | "ACTIVE" | "COMPLETED";
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  link?: string;
  type: "INVITE" | "STATUS" | "JUDGING" | "ANNOUNCEMENT" | "DEADLINE";
}

export interface DemoApplication {
  id: string;
  name: string;
  email: string;
  city: string;
  role: string;
  skills: string[];
  status: ApplicationStatus;
  teamName: string;
  appliedAt: string;
  avatar: string;
  experience: string;
}
