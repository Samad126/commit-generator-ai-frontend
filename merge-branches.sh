set -e

# Function to check if a branch exists locally or remotely
function branch_exists() {
  git show-ref --verify --quiet refs/heads/"$1" || git ls-remote --exit-code --heads origin "$1" > /dev/null 2>&1
}

while true; do
  echo ""
  echo "==================== GIT BRANCH MERGE TOOL ===================="

  # Ask for source branch with default
  while true; do
    read -rp "Enter the source branch to merge from (default: dev): " BRANCH_SOURCE
    BRANCH_SOURCE=${BRANCH_SOURCE:-dev}

    if branch_exists "$BRANCH_SOURCE"; then
      break
    else
      echo "❌ Branch '$BRANCH_SOURCE' not found. Please enter a valid branch."
    fi
  done

  # Ask for target branch with default
  while true; do
    read -rp "Enter the target branch to merge into (default: master): " BRANCH_TARGET
    BRANCH_TARGET=${BRANCH_TARGET:-master}

    if branch_exists "$BRANCH_TARGET"; then
      break
    else
      echo "❌ Branch '$BRANCH_TARGET' not found. Please enter a valid branch."
    fi
  done

  # Ask if user wants to commit and push changes on the source branch first
  read -rp "Do you want to commit and push any uncommitted changes on '$BRANCH_SOURCE'? [y/N]: " PUSH_SOURCE
  PUSH_SOURCE=${PUSH_SOURCE,,}

  if [[ "$PUSH_SOURCE" == "y" || "$PUSH_SOURCE" == "yes" ]]; then
    echo "🔄 Switching to '$BRANCH_SOURCE' to commit and push changes..."
    git checkout "$BRANCH_SOURCE"

    read -rp "Enter your commit message: " COMMIT_MSG

    git add .
    git commit -m "$COMMIT_MSG"
    git push origin "$BRANCH_SOURCE"
    echo "✅ Changes committed and pushed to '$BRANCH_SOURCE'."
  fi

  echo ""
  echo "🔁 Starting merge: '$BRANCH_SOURCE' → '$BRANCH_TARGET'..."

  CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

  echo "📥 Switching to target branch '$BRANCH_TARGET'..."
  git checkout "$BRANCH_TARGET"
  git pull origin "$BRANCH_TARGET"

  echo "🔀 Merging changes from '$BRANCH_SOURCE'..."
  git merge "$BRANCH_SOURCE"

  echo "📤 Pushing merged updates to '$BRANCH_TARGET'..."
  git push origin "$BRANCH_TARGET"

  echo "↩️  Returning to your original branch '$CURRENT_BRANCH'..."
  git checkout "$CURRENT_BRANCH"

  echo "✅ Merge complete: '$BRANCH_SOURCE' has been merged into '$BRANCH_TARGET'."

  echo ""
  read -rp "Would you like to perform another merge? [y/N]: " AGAIN
  AGAIN=${AGAIN,,}

  if [[ "$AGAIN" != "y" && "$AGAIN" != "yes" ]]; then
    echo "👋 Exiting merge tool. Done!"
    break
  fi

  echo ""
done