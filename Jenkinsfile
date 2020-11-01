 pipeline{
    agent {
        docker { image 'node:14-alpine' }
    }
    stages{
        stage('test'){
            when{
                changeset "**/src/**"
            }
            steps{
                sh 'npm install'
                sh 'npm run testci'
            }
             post {
                 always {
                     junit 'output/coverage/jest/junit.xml'
                }
            }
        }
        stage('sonarqube'){
            agent any
            environment{
                sonarpath = tool 'SonarScanner'
            }
             steps{
                 withSonarQubeEnv('sonarqube'){
                     sh "${sonarpath}/bin/sonar-scanner -Dproject.settins.settings=sonar-project.properties"
                 }
             }
        }
         stage('build'){
            when{
                branch 'master'
                changeset "**/src/**"
            }
            steps{
                sh 'npm install'
                sh 'npm run build'
                archiveArtifacts artifacts: '**/build/*.*', fingerprint: true
            }
        }
    } 
}

