import { expect } from 'chai'
import { createSandbox } from 'sinon'
import {
  after, afterEach, before, describe, it,
} from 'mocha'
import { singleNovel, twoNovels } from '../mocks/novelsMocks'
import { allNovels, filterNovels } from '../../utilities/novels'

describe('Utilities - novels', () => {
  let sandbox
  let stubbedallNovels

  before(() => {
    sandbox = createSandbox()

    stubbedallNovels = sandbox.stub(allNovels, 'allNovels')
  })

  afterEach(() => {
    sandbox.reset()
  })

  after(() => {
    sandbox.restore()
  })

  describe('allNovels', () => {
    it('returns a list of the novels', async () => {
      stubbedallNovels.returns({ pathname: 'api/novels' })

      const data = await allNovels()

      expect(data).to.deep.equal(singleNovel)
    })
  })

  describe('filterNovels', () => {
    it('returns the matching list of filtered data', () => {
      const filtered = filterNovels(twoNovels, 'dracula')

      expect(filtered).to.deep.equal(singleNovel)
    })
  })
})
