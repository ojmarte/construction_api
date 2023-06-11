
import JobModel, { Job } from '../models/job.model';

export class JobService {
  public async createJob(jobData: Job): Promise<Job> {
    try {
      const job = await JobModel.create(jobData);
      return job;
    } catch (error) {
      throw new Error('Failed to create job');
    }
  }

  public async getJobById(jobId: string): Promise<Job | null> {
    try {
      const job = await JobModel.findById(jobId);
      return job;
    } catch (error) {
      throw new Error('Failed to fetch job');
    }
  }

  public async getAllJobs(): Promise<Job[]> {
    try {
      const jobs = await JobModel.find();
      return jobs;
    } catch (error) {
      throw new Error('Failed to fetch jobs');
    }
  }

  public async updateJob(jobId: string, jobData: Partial<Job>): Promise<Job | null> {
    try {
      const job = await JobModel.findByIdAndUpdate(jobId, jobData, { new: true });
      return job;
    } catch (error) {
      throw new Error('Failed to update job');
    }
  }

  public async deleteJob(jobId: string): Promise<void> {
    try {
      await JobModel.findByIdAndDelete(jobId);
    } catch (error) {
      throw new Error('Failed to delete job');
    }
  }
}
