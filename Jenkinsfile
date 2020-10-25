 pipeline{
    agent any
    stages{
        stage('test'){
            steps{
                script{
                    docker.withServer('tcp://host.docker.jenkins:2375') {
                        docker.image('node:14-alpine').inside{
                            sh '/usr/bin/npm run testci'
                        }
                    }
                }
            }
        } 
    }
}
