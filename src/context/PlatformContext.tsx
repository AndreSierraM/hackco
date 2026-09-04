"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  UserRole,
  Program,
  Team,
  TeamMember,
  ProjectSubmission,
  JudgeEvaluation,
  NotificationItem,
  ProjectPipelineStage,
  DemoApplication,
  ApplicationStatus,
} from "@/types";
import {
  DEMO_PROGRAMS,
  DEMO_TEAMS,
  DEMO_PROJECTS,
  DEMO_APPLICATIONS,
  DEMO_NOTIFICATIONS,
} from "@/lib/demo-data";

interface PlatformContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  programs: Program[];
  addProgram: (program: Program) => void;
  teams: Team[];
  addTeam: (team: Team) => void;
  joinTeam: (teamId: string, member: TeamMember) => void;
  applications: DemoApplication[];
  updateApplicationStatus: (id: string, status: ApplicationStatus) => void;
  submissions: ProjectSubmission[];
  addSubmission: (submission: ProjectSubmission) => void;
  updateSubmissionStage: (id: string, stage: ProjectPipelineStage) => void;
  evaluations: Record<string, JudgeEvaluation>;
  saveEvaluation: (evalData: JudgeEvaluation) => void;
  notifications: NotificationItem[];
  markNotificationAsRead: (id: string) => void;
  isCommandPaletteOpen: boolean;
  setIsCommandPaletteOpen: (open: boolean) => void;
  isNotificationDrawerOpen: boolean;
  setIsNotificationDrawerOpen: (open: boolean) => void;
}

const PlatformContext = createContext<PlatformContextType | undefined>(undefined);

export function PlatformProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<UserRole>("PARTICIPANT");
  const [programs, setPrograms] = useState<Program[]>(DEMO_PROGRAMS);
  const [teams, setTeams] = useState<Team[]>(DEMO_TEAMS);
  const [applications, setApplications] = useState<DemoApplication[]>(DEMO_APPLICATIONS);
  const [submissions, setSubmissions] = useState<ProjectSubmission[]>(DEMO_PROJECTS);
  const [notifications, setNotifications] = useState<NotificationItem[]>(DEMO_NOTIFICATIONS);
  const [evaluations, setEvaluations] = useState<Record<string, JudgeEvaluation>>({
    "proj-docuflow": {
      id: "eval-1",
      judgeId: "judge-01",
      judgeName: "Dra. Carolina Martínez",
      projectId: "proj-docuflow",
      programId: "prog-ai-northstar",
      scores: {
        "rub-impact": 10,
        "rub-tech": 9,
        "rub-inno": 9,
        "rub-ux": 9,
        "rub-pitch": 10,
      },
      comments: "Excepcional planteamiento de arquitectura. La validación con documentos reales es muy convincente.",
      privateNotes: "Fuerte candidato a 1er puesto. Verificar compatibilidad con API legal.",
      hasConflict: false,
      isCompleted: true,
      submittedAt: "2026-10-25T16:00:00Z",
    },
  });
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] = useState(false);

  // Global shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const addProgram = (program: Program) => {
    setPrograms((prev) => [program, ...prev]);
  };

  const addTeam = (team: Team) => {
    setTeams((prev) => [team, ...prev]);
  };

  const joinTeam = (teamId: string, member: TeamMember) => {
    setTeams((prev) =>
      prev.map((t) => (t.id === teamId ? { ...t, members: [...t.members, member] } : t))
    );
  };

  const updateApplicationStatus = (id: string, status: ApplicationStatus) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status } : app))
    );
  };

  const addSubmission = (submission: ProjectSubmission) => {
    setSubmissions((prev) => {
      const exists = prev.some((s) => s.id === submission.id);
      if (exists) {
        return prev.map((s) => (s.id === submission.id ? submission : s));
      }
      return [submission, ...prev];
    });
  };

  const updateSubmissionStage = (id: string, stage: ProjectPipelineStage) => {
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, pipelineStage: stage } : s))
    );
  };

  const saveEvaluation = (evalData: JudgeEvaluation) => {
    setEvaluations((prev) => ({
      ...prev,
      [evalData.projectId]: evalData,
    }));
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <PlatformContext.Provider
      value={{
        role,
        setRole,
        programs,
        addProgram,
        teams,
        addTeam,
        joinTeam,
        applications,
        updateApplicationStatus,
        submissions,
        addSubmission,
        updateSubmissionStage,
        evaluations,
        saveEvaluation,
        notifications,
        markNotificationAsRead,
        isCommandPaletteOpen,
        setIsCommandPaletteOpen,
        isNotificationDrawerOpen,
        setIsNotificationDrawerOpen,
      }}
    >
      {children}
    </PlatformContext.Provider>
  );
}

export function usePlatform() {
  const context = useContext(PlatformContext);
  if (!context) {
    throw new Error("usePlatform must be used within a PlatformProvider");
  }
  return context;
}
