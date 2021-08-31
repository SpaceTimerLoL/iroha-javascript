@Library('jenkins-library' ) _

def pipeline = new org.js.LibPipeline( steps: this,
    packageManager: "pnpm",
    buildDockerImage: 'build-tools/node:14-ubuntu-rust',
    libPushBranches: ['iroha2-dev'],
    npmRegistries: ['https://nexus.iroha.tech/repository/npm-soramitsu/': 'bot-soramitsu-rw'],
    preBuildCmds: ['pnpm install --unsafe-perm'],
    testCmds: ['pnpm type-check','pnpm test'],
    pushCmds: ['npm config set registry "https://nexus.iroha.tech/repository/npm-soramitsu/"', 'pnpm publish-all']
   )
pipeline.runPipeline()
