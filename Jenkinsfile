pipeline {
    agent {
        label 'linux-agent'
    }

    tools {
        maven 'Maven-3'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Check Tools') {
            steps {
                sh 'java -version'
                sh 'mvn -version'
            }
        }

        stage('Build & Test') {
            steps {
                dir('maven-demo') {
                    sh 'mvn clean test'
                }
            }
        }

        stage('Package') {
            steps {
                dir('maven-demo') {
                    sh 'mvn package'
                }
            }
        }

        stage('Archive JAR') {
            steps {
                archiveArtifacts artifacts: 'maven-demo/target/*.jar', fingerprint: true
            }
        }
    }

    post {
        always {
            junit 'maven-demo/target/surefire-reports/*.xml'
        }
    }
}
