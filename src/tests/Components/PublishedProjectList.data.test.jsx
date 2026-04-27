import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import PublishedProjectsList from "../../components/organisms/PublishedProjectsList/PublishedProjectsList";
import ProjectService from "../../services/ProjectService";
import ApplicationService from "../../services/ApplicationService";


const mocks = vi.hoisted(() => ({
  getPublishedProjects: vi.fn(),
  applyToProject: vi.fn(),
}));

vi.mock("../../services/ProjectService", () => ({
  default: vi.fn(() => ({
    getPublishedProjects: mocks.getPublishedProjects,
  })),
}));

vi.mock("../../services/ApplicationService", () => ({
  default: {
    applyToProject: mocks.applyToProject,
  },
}));

vi.mock("../../hooks/useApplications", () => ({
  useApplications: () => ({
    appliedProjectIds: [],
    refetch: vi.fn(),
  }),
}));

vi.mock("../../hooks/useModal", () => ({
  useModal: () => ({
    isOpen: false,
    open: vi.fn(),
    close: vi.fn(),
  }),
}));

vi.mock("../../components/organisms/ProjectCard/ProjectCard", () => ({
  default: ({ project, onClick }) => (
    <button onClick={onClick}>{project.id}</button>
  ),
}));



describe("PublishedProjectsList - apply flow", () => {
  it("applies directly when project is NOT full", async () => {
  const user = userEvent.setup();

  const project = {
    id: 1,
    totalApplications: 1,
    requiredVolunteers: 5,
  };

  mocks.getPublishedProjects.mockResolvedValue([project]);
  mocks.applyToProject.mockResolvedValue({ status: "NORMAL" });

  render(
    <MemoryRouter>
      <PublishedProjectsList title="Projects" />
    </MemoryRouter>
  );
  screen.debug();

    const button = await screen.findByText("1");

    await user.click(button);

    

    await waitFor(() => {
      expect(mocks.applyToProject).toHaveBeenCalledWith(1);
    });
  });
});
