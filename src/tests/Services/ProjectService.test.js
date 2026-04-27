import api from "../../services/api";
import ProjectService from "../../services/ProjectService";
import { vi, describe, it, expect } from "vitest";

vi.mock("../../services/api", () => ({
  default: { get: vi.fn(), post: vi.fn(), patch: vi.fn() },
}));

describe("ProjectService", () => {
  const service = ProjectService();
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should create a project", async () => {
    const formData = { title: "Test project" };
    api.post.mockResolvedValue({ data: { id: 1, ...formData } });
    const result = await service.createProject(formData);
    expect(api.post).toHaveBeenCalledWith("/api/v1/projects", formData);
    expect(result).toEqual({ id: 1, ...formData });
  });

  it("should fetch pending projects", async () => {
    const mockData = [{ id: 1 }];
    api.get.mockResolvedValue({ data: mockData });
    const result = await service.getPendingProjects();
    expect(api.get).toHaveBeenCalledWith("/api/v1/projects/pending");
    expect(result).toEqual(mockData);
  });

  it("should fetch published projects", async () => {
    const mockData = [{ id: 2 }];
    api.get.mockResolvedValue({ data: { data: mockData } });
    const result = await service.getPublishedProjects();
    expect(api.get).toHaveBeenCalledWith("/api/v1/projects/published");
    expect(result).toEqual(mockData);
  });

  it("should fetch ONG projects", async () => {
    const mockData = [{ id: 3 }];
    api.get.mockResolvedValue({ data: { data: mockData } });
    const result = await service.getOngProjects();
    expect(api.get).toHaveBeenCalledWith("/api/v1/projects/my-projects");
    expect(result).toEqual(mockData);
  });

  it("should fetch all projects", async () => {
    const mockData = [{ id: 4 }];
    api.get.mockResolvedValue({ data: { data: mockData } });
    const result = await service.getAllProjects();
    expect(api.get).toHaveBeenCalledWith("/api/v1/projects/all");
    expect(result).toEqual(mockData);
  });

  it("should update project status", async () => {
    api.patch.mockResolvedValue({ data: { success: true } });
    const result = await service.updateProjectStatus(10, "APPROVED");
    expect(api.patch).toHaveBeenCalledWith("/api/v1/projects/10/status", {
      status: "APPROVED",
    });
    expect(result).toEqual({ success: true });
  });

  it("should throw when API fails", async () => {
    api.get.mockRejectedValue(new Error("Network error"));
    await expect(service.getPublishedProjects()).rejects.toThrow(
      "Network error",
    );
  });
});
