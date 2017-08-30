<template>
    <pre class="prettyprint"><code>{{ code }}</code></pre>
</template>

<script>
    import 'code-prettify'

    export default {
        name: 'pretty-code',
        props: ['code'],
        mounted() {
    		PR.prettyPrint()
    	},
    }
</script>

<style lang="scss">
    @import '~loop/base/variables';
    @import '~prettify/src/prettify.css';

    pre.prettyprint {
        margin-top: 25px;
        margin-bottom: 25px;
        font-size: 1.4rem;
        font-weight: 700;
        border: none;
        border-left: .3rem solid $color-primary;
        background-color: #f5f5f5;
        overflow: scroll;
        overflow-y: hidden;

        .tag,
        .atn,
        .pun { color: $color-primary }
        .atv { color: #d85b43 }
        .pln {
            color: #222;
            font-weight: 400;
        }
        .com {
            color: #a9a9a9;
            font-style: italic;
        }

        code {
            padding: 18px 25px;
            display: block;
            white-space: pre;
        }
    }
</style>
