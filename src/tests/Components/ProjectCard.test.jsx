import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import ProjectCard from "../../components/organisms/ProjectCard/ProjectCard";


vi.mock("../../components/molecules/ProjectDetails/ProjectDetails", () => ({
  default: ({ details }) => (
    <div data-testid="project-details">{JSON.stringify(details)}</div>
  ),
}));

vi.mock("../../components/atoms/DescriptionField/DescriptionField", () => ({
  default: ({ text }) => <p>{text}</p>,
}));

vi.mock("../../components/atoms/CatLogo/CatLogo", () => ({
  default: ({ categorie }) => <div data-testid="cat-logo">{categorie}</div>,
}));

vi.mock("../../components/atoms/PrimaryButton/PrimaryButton", () => ({
  default: ({ text, onClick }) => (
    <button onClick={onClick}>{text}</button>
  ),
}));


const baseProject = {
  id: 1,
  title: "Clean Beach",
  description: "Help clean the beach",
  imageUrl: "image.jpg",
  startDate: "2024-01-01",
  endDate: "2024-01-10",
  locationType: "REMOTE",
  requiredVolunteers: 10,
  totalApplications: 5,
  totalHours: 20,
  status: "PUBLISHED",
  sdgs: ["ENVIRONMENT"],
};


test("renders project title, description and image", () => {
  render(<ProjectCard project={baseProject} mode="public" />);

  expect(screen.getByText("Clean Beach")).toBeInTheDocument();
  expect(screen.getByText("Help clean the beach")).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("src", "image.jpg");
});

test("shows REGISTER button when project is open and not full", () => {
  const onClick = vi.fn();

  render(
    <ProjectCard
      project={baseProject}
      mode="public"
      isApplied={false}
      onClick={onClick}
    />
  );

  const btn = screen.getByText("REGISTRAR");
  expect(btn).toBeInTheDocument();

  fireEvent.click(btn);
  expect(onClick).toHaveBeenCalledWith(1);
});

test("shows WAITING LIST when project is full", () => {
  const onClick = vi.fn();

  const fullProject = {
    ...baseProject,
    totalApplications: 10,
    requiredVolunteers: 10,
  };

  render(
    <ProjectCard
      project={fullProject}
      mode="public"
      isApplied={false}
      onClick={onClick}
    />
  );

  expect(screen.getByText("LISTA DE ESPERA")).toBeInTheDocument();
});

test("shows INSCRITO when user is already applied", () => {
  render(
    <ProjectCard
      project={baseProject}
      mode="public"
      isApplied={true}
    />
  );

  expect(screen.getByText("INSCRITO")).toBeInTheDocument();
});

test("shows status badge in owner mode", () => {
  render(<ProjectCard project={baseProject} mode="owner" />);

  expect(screen.getByText("PUBLICADO")).toBeInTheDocument();
});