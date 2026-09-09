pipeline {
    agent any

    options {
        disableConcurrentBuilds()
        skipDefaultCheckout(true)
        timestamps()
        timeout(time: 20, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '20'))
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout main') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[url: 'https://github.com/InhwanCho/penta-works-homepage.git']]
                ])
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    ssh -i "$HOME/.ssh/id_ed25519" \
                      -o BatchMode=yes \
                      -o StrictHostKeyChecking=yes \
                      inhwan@192.168.0.210 \
                      'bash -s' < deploy/deploy.sh
                '''
            }
        }
    }

    post {
        always {
            deleteDir()
        }
    }
}

