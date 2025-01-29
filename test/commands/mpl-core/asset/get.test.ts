import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('mpl-core/asset/get', () => {
  it('runs mpl-core/asset/get cmd', async () => {
    const {stdout} = await runCommand('mpl-core/asset/get')
    expect(stdout).to.contain('hello world')
  })

  it('runs mpl-core/asset/get --name oclif', async () => {
    const {stdout} = await runCommand('mpl-core/asset/get --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
