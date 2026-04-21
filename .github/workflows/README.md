# GitHub Actions Automation Configuration

This directory contains automated workflows to ensure zero production errors.

## Workflows Overview

### 1. **dev-quality-check.yml**
- Triggers on every push/PR to `dev` branch
- Runs: linting, build, health check, robots.txt validation
- Creates automated PR to `master` when all checks pass
- Labels PR as `automated` for tracking

### 2. **master-production-check.yml**
- Triggers on every push/PR to `master` branch
- Comprehensive production validation
- Ensures master is always deployment-ready
- Blocks merge if any check fails

### 3. **auto-merge-to-master.yml**
- Automatically merges dev → master PRs when checks pass
- Uses squash merge for clean history
- Prevents merge conflicts and manual intervention

## Branch Protection Rules (Required)

To enforce zero errors, configure these rules in GitHub:

**For `master` branch:**
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging
- ✅ Require code reviews from at least 1 approver (optional)
- ✅ Dismiss stale PR approvals when new commits are pushed
- ✅ Allow auto-merge (for automated PRs)
- ❌ Prevent direct pushes (all changes via PR)

## How It Works

1. **Developer Push** → `dev` branch
   ```
   git push origin dev
   ```

2. **Automated Quality Check** ✓
   - Linting passes
   - Build succeeds
   - Health checks pass
   - SEO validation passes

3. **Auto PR Creation** 
   - GitHub creates PR: `dev` → `master`
   - Labeled as `automated`

4. **Auto Merge** (if enabled)
   - Checks pass on PR
   - PR auto-merges to master
   - Clean commit history maintained

5. **Production Validation**
   - Master branch validated again
   - Ready for deployment

## CI/CD Process Map

```
┌─────────────────────────────────────────────────────────────┐
│                      Developer Work                          │
│                   (any feature/fix)                          │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
        ┌────────────────────────────────────┐
        │  Push to DEV Branch                │
        └────────────────┬───────────────────┘
                         │
                         ▼
        ┌────────────────────────────────────┐
        │  Auto Quality Check                │
        │  ✓ Lint ✓ Build ✓ Health ✓ SEO   │
        └────────────────┬───────────────────┘
                         │
              ┌──────────┴──────────┐
              │                     │
             ✗ FAIL              ✓ PASS
              │                     │
              ▼                     ▼
        ┌──────────────┐   ┌──────────────────────┐
        │ Block Merge  │   │ Create Auto PR       │
        │ Fix Issues   │   │ dev → master         │
        └──────────────┘   └────────┬─────────────┘
                                    │
                                    ▼
                        ┌──────────────────────┐
                        │  Auto Merge Check    │
                        │  (if enabled)        │
                        └────────┬─────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                        │
                   ✓ PASS               ✗ FAIL
                    │                        │
                    ▼                        ▼
         ┌────────────────────┐   ┌──────────────────┐
         │ Auto Merge to      │   │ Require Manual   │
         │ Master (Squash)    │   │ Review & Merge   │
         └────────────┬───────┘   └──────────────────┘
                      │
                      ▼
         ┌────────────────────────────────────┐
         │  Master Production Check           │
         │  ✓ Full Validation                 │
         │  ✓ Ready for Domain Deployment     │
         └────────────────────────────────────┘
```

## Setup Instructions

### 1. Enable Workflows
- The workflow files are already in `.github/workflows/`
- GitHub automatically detects and enables them
- No additional setup needed

### 2. Configure Branch Protection (GitHub Settings)
Go to: `Settings` → `Branches` → `Branch protection rules` → `Add rule`

**Branch name pattern:** `master`

Configure:
```
☑ Require status checks to pass before merging
   ☑ production-validation
   ☑ Require branches to be up to date before merging
   
☑ Allow auto-merge
   (for automated PRs labeled 'automated')

☑ Dismiss stale pull request approvals when new commits are pushed
```

### 3. Enable Auto-Merge
Settings → General → Pull Requests
- ☑ Allow auto-merge

## Monitoring

**GitHub Actions Dashboard:**
- Visit: `Actions` tab in your repository
- Monitor workflow runs
- Check logs for any failures

**Pull Requests:**
- Automated PRs labeled `automated`
- Check status of quality checks
- Monitor auto-merge progress

## Troubleshooting

### Workflow not running?
1. Check `.github/workflows/` files exist
2. Verify files use correct YAML syntax
3. Go to Actions → View logs

### Build failing?
1. Check `npm run build` locally
2. Verify all dependencies installed
3. Review build logs in GitHub Actions

### PR not merging?
1. Check branch protection rules
2. Verify all status checks pass
3. Ensure PR has `automated` label

## Manual Overrides

**If you need to merge manually:**
1. Go to the PR
2. Check all status indicators show ✓
3. Click "Merge pull request"
4. Master branch will still validate before deployment

## Production Deployment

After merge to `master`:
1. All production validation checks pass
2. Master branch is guaranteed zero-error state
3. Deploy to your domain
4. Monitor with GitHub Actions logs

---

**Zero Production Errors Guarantee:**
- ✅ Every commit to `dev` is validated
- ✅ Every merge to `master` is validated  
- ✅ Master is always deployment-ready
- ✅ Automated process prevents human error
