 pipeline{
    agent any

    tools{
        nodejs 'nodejs10'
    }

    stages{
        stage('test'){
            steps{
                sh 'npm install'
                sh 'npm run testci'
            }
        }
    } 
}

