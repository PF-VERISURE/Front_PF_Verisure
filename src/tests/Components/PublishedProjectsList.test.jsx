import { render, screen, waitFor } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import PublishedProjectsList from "../../components/organisms/PublishedProjectsList/PublishedProjectsList";
import ProjectService from "../../services/ProjectService";

vi.mock("../../services/ProjectService", () => ({
  default: vi.fn(),
}));

vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
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
  default: ({ project }) => <div>{project.id}</div>,
}));

describe("PublishedProjectsList", () => {
  it("should fetch and display projects", async () => {
    const mockProjects = [
      { id: 1, totalApplications: 0, requiredVolunteers: 5 },
    ];

    ProjectService.mockReturnValue({
      getPublishedProjects: vi.fn().mockResolvedValue(mockProjects),
    });

    render(<PublishedProjectsList title="Test" />);

    expect(screen.getByText(/Test/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("1")).toBeInTheDocument();
    });
  });
});