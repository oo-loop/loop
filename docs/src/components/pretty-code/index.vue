<template>
    <pre class="prettyprint"><code>{{ code }}</code></pre>
</template>

<script>
    import 'code-prettify'
    import 'code-prettify/loader/lang-css'

    export default {
        name: 'pretty-code',
        props: ['code'],
        mounted() {
    		PR.prettyPrint()
    	},
    }
</script>

<style lang="scss">
    @import '~loop/variables';

    $variable: #4198e2;
    $attribute: #bbe888;
    $value: #f36c44;

    pre.prettyprint {
        padding: 1.4rem 2rem;
        font-weight: 700;
        border: none;
        background-color: #353535;

        code { background-color: inherit; }

        .tag,
        .atn,
        .pun { color: $color-primary; }
        .atv { color: $attribute; }
        .pln {
            color: #fff;
        }
        .com {
            color: #a9a9a9;
            font-style: italic;
        }

        &.language-css {
            .str { color: $attribute; }
            .pun,
            .pun + .pln,
            .kwd { color: $color-primary; }
            .pun + .pln {
                font-weight: 700;
            }
            .lit { color: $value; }
        }
    }
</style>
