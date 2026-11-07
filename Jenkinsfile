pipeline {
    agent {
        label 'linux-agent'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Node.js application...'
                sh 'node --check app.js'
                sh 'node --check test.js'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                    docker build \
                    -t jenkins-nodejs-demo:v1 \
                    -f Dockerfile .
                '''
            }
        }

        stage('Docker Image Verification') {
            steps {
                sh 'docker images jenkins-nodejs-demo:v1'
            }
        }
    }

    post {
        success {
            echo 'CI Pipeline with Docker Build completed successfully!'
        }

        failure {
            echo 'CI Pipeline failed!'
        }
    }
}
