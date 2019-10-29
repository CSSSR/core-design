pipeline {
  agent any

  stages {
    stage('Install dependencies') {
      steps {
        script {
          sh """#!/bin/bash
            source ~/.bashrc
            yarn install --frozen-lockfile
          """
        }
      }
    }

    stage('Run CI script (tests, publishing)') {
      steps {
        sshagent(credentials: ['core-design-repo']) {
          withCredentials([
            string(credentialsId: 'npm-token', variable: 'NPM_TOKEN'),
          ]) {
            sh """
              source ~/.bashrc
              set -e

              # up versions
              yarn lerna version --conventional-commits --allow-branch=master --no-changelog --sign-git-commit --sign-git-tag --yes

              # publish
              yarn release

              git push origin master --follow-tags
            """
          }
        }
      }
    }
  }
}
