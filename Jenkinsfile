 pipeline{
    agent any

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

