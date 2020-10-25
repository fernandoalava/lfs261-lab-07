 pipeline{

    stages{
        stage('test'){
            steps{
                docker.withServer('tcp://host.docker.jenkins:2375') {
                docker.image('node:14-alpine'){
                    sh '/usr/bin/npm run testci'
                    }
            }
            }
            
        } 
    }
}
