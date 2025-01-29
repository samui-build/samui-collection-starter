import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('mpl-core/collection/get', () => {
  it('runs mpl-core/collection/get cmd', async () => {
    const {stdout} = await runCommand('mpl-core/collection/get')
    expect(stdout).to.contain('hello world')
  })

  it('runs mpl-core/collection/get --name oclif', async () => {
    const {stdout} = await runCommand('mpl-core/collection/get --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
