# Data and Recovery Runbook (5.4)

## Backup Policy
- CMS/DB backups: daily automatic snapshots.
- Retention: minimum 30 days rolling.
- Store backup artifacts in provider-managed encrypted storage.

## Daily Backup Checks
- Confirm last successful backup timestamp is within 24 hours.
- Confirm backup size is non-zero and within expected range.
- Confirm checksum/hash metadata is present.

## Weekly Restore Verification
1. Create isolated restore target (staging database).
2. Restore latest backup snapshot.
3. Run smoke checks:
   - Product listing loads
   - Product details load
   - Contact API responds
4. Record restore duration and success/failure.
5. Clean up restore target.

## Last Known Good Artifact Retention
- Keep at least last 5 successful production deployment artifacts.
- Keep last known good deployment pinned in Vercel Deployments.
- Rollback target must be promotable with one click.

## Recovery RTO/RPO Targets
- RTO: <= 60 minutes for data restore.
- RPO: <= 24 hours (daily snapshots).

## Incident Documentation
For every restore or rollback event, capture:
- Trigger and incident ID
- Backup snapshot ID used
- Restore start/end timestamps
- Verification checklist outcome
- Follow-up actions
