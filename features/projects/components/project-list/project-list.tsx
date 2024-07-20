import { LoadingIndicator } from "../../../ui/loadingIndicator/loadingIndicator";
import { ProjectError } from "../../../ui/project-error/project-error";
import { useGetProjects } from "../../api/use-get-projects";
import { ProjectCard } from "../project-card";
import styles from "./project-list.module.scss";

export function ProjectList() {
  const { data, isLoading, isError, refetch } = useGetProjects();

  isLoading && (
    <div>
      <LoadingIndicator />
    </div>
  );

  // if (isLoading) {
  //   return (
  //     <div>
  //       <LoadingIndicator />
  //     </div>
  //   );
  // }
  isError && (
    <div>
      <ProjectError onRetry={refetch} />
    </div>
  );

  // if (isError) {
  //   // console.error(error);
  //   // return <div>Error: {error.message}</div>;
  //   return (
  //     <div>
  //       <ProjectError onRetry={refetch} />
  //     </div>
  //   );
  // }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
