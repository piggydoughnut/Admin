import {describe, it} from 'mocha';
import {expect} from 'chai';
import {hbs} from 'ember-cli-htmlbars';
import {render} from '@ember/test-helpers';
import {setupRenderingTest} from 'ember-mocha';

describe('Integration: Component: gh-launch-wizard/set-pricing', function () {
    setupRenderingTest();

    it('renders', async function () {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        await render(hbs`<GhLaunchWizard::SetPricing />`);

        expect(this.element.textContent.trim()).to.have.string('Set subscription pricing');
    });
});
