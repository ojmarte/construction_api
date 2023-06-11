import { Request, Response } from 'express';
import { JobService } from '../services/job.service';

export class JobController {
  private jobService: JobService;

  constructor() {
    this.jobService = new JobService();
  }

  public createJob = async (req: Request, res: Response): Promise<void> => {
    try {
      const jobData = req.body;
      const job = await this.jobService.createJob(jobData);
      res.status(201).json(job);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create job' });
    }
  };

  public getJobById = async (req: Request, res: Response): Promise<void> => {
    try {
      const jobId = req.params.id;
      const job = await this.jobService.getJobById(jobId);
      if (job) {
        res.status(200).json(job);
      } else {
        res.status(404).json({ error: 'Job not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch job' });
    }
  };

  public getAllJobs = async (req: Request, res: Response): Promise<void> => {
    try {
      const jobs = await this.jobService.getAllJobs();
      res.status(200).json(jobs);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch jobs' });
    }
  };

  public updateJob = async (req: Request, res: Response): Promise<void> => {
    try {
      const jobId = req.params.id;
      const jobData = req.body;
      const updatedJob = await this.jobService.updateJob(jobId, jobData);
      if (updatedJob) {
        res.status(200).json(updatedJob);
      } else {
        res.status(404).json({ error: 'Job not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update job' });
    }
  };

  public deleteJob = async (req: Request, res: Response): Promise<void> => {
    try {
      const jobId = req.params.id;
      await this.jobService.deleteJob(jobId);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete job' });
    }
  };
}
