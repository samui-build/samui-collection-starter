import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('mpl-core/asset/burn', () => {
  it('runs mpl-core/asset/burn cmd', async () => {
    const {stdout} = await runCommand('mpl-core/asset/burn')
    expect(stdout).to.contain('hello world')
  })

  it('runs mpl-core/asset/burn --name oclif', async () => {
    const {stdout} = await runCommand('mpl-core/asset/burn --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
