import { axios } from "./axios";
import type { Project } from "./projects.types";
import { ProjectLanguage, ProjectStatus } from "@api/projects.types";

const ENDPOINT = "/project";

function mapApiStatusToEnum(status: string): ProjectStatus {
  switch (status) {
    case "error":
      return ProjectStatus.critical;
    case "warning":
      return ProjectStatus.warning;
    case "info":
      return ProjectStatus.stable;
    default:
      return ProjectStatus.stable;
  }
}

export async function getProjects(): Promise<Project[]> {
  const { data } = await axios.get<
    {
      id: string;
      name: string;
      language: ProjectLanguage;
      numIssues: number;
      numEvents24h: number;
      status: string;
    }[]
  >(ENDPOINT);

  return data.map((project) => ({
    ...project,
    status: mapApiStatusToEnum(project.status),
  }));
}
