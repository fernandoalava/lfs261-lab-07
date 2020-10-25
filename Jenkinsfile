 pipeline{
    agent any

    tools{
        nodejs 'nodejs10'
    }

    stages{
        stage('test'){
            steps{
                sh 'npm run testci'
            }
        }
    } 
}

