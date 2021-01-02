import { extend } from 'flarum/extend';
import app from 'flarum/app';
import ReplyComposer from 'flarum/components/ReplyComposer';

app.initializers.add('alterbyte/stripe-payment', () => {
  extend(ReplyComposer.prototype, 'headerItems', function(items) {
    items.add('checkout', stripeComponent({
        name: 'awardedBargInit',
        icon: 'fas fa-check',
    }));
})});
