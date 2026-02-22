# Fix andrewcv so new code deploys

## Why redeploy uses old code
andrewcv is building from an old commit ("Initial commit" ff22c78). Redeploy reuses that same build. New pushes go to **andrewaminazm/andrewsite** but andrewcv is not connected to that repo (or is connected to a different branch/repo).

## Step 1: Connect andrewcv to the right repo

1. Open **andrewcv** in Vercel:  
   https://vercel.com/andrewaminazms-projects/andrewcv/settings

2. Go to **Settings** → **Git** (or **Git Integration**).

3. Under **Connected Git Repository**:
   - If you see a different repo (e.g. andrewcv or another name), click **Disconnect**.
   - Click **Connect Git Repository**.
   - Choose **GitHub** and select **andrewaminazm/andrewsite**.
   - Branch: **main**.
   - Save.

4. Trigger a new deployment from latest code:
   - Go to **Deployments**.
   - Click **Redeploy** on the latest deployment, and **uncheck** "Use existing Build Cache" if you want a clean build.
   - **Or** push a small commit to `main` — andrewcv should now create a **new** deployment (not "Redeploy of...") with the latest code.

## Step 2 (optional): Deploy current code now via CLI

From your project folder, link to **andrewcv** and deploy:

```powershell
cd D:\andrewsite
npx vercel link
```
- When asked, choose your **scope** (e.g. andrewaminazms-projects).
- When asked "Link to existing project?", choose **Y**.
- Select **andrewcv** from the list.

Then:

```powershell
npx vercel --prod --yes
```

This deploys your current folder (with Blog button, etc.) to andrewcv.
