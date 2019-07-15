<template>
    <pre class="prettyprint"><code>{{ code }}</code></pre>
</template>

<script>
    import 'code-prettify'
    import 'code-prettify/loader/lang-css'

    export default {
        name: 'prettyCode',
        props: ['code'],
        mounted() {
    		PR.prettyPrint()
    	},
    }
</script>

<style lang="scss">
    @import '~loop/loop';
    @include ooInit;

    $code-bgcolor:         #f5f5f5 !default;
    $code-color:           #333333 !default;
    $code-highlight-color: #d85b43 !default;

    code {
        padding: .2rem .5rem;
        margin-left: .2rem;
        margin-right: .2rem;

        font-size: 85%;
        color: $code-highlight-color;
        white-space: nowrap;
        background-color: $code-bgcolor;
        border-radius: .4rem;
        @include fontSmoothing(false)
    }

    pre {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        padding: 1rem 1.250rem;

        background-color: $code-bgcolor;
        overflow: auto;

        & > code {
            padding: 0;
            margin-left: 0;
            margin-right: 0;
            color:  $code-color;
            white-space: pre;
            border-radius: 0;
        }
    }
    $tag: #28b0ff;
    $variable: #4198e2;
    $attribute: #bbe888;
    $value: #f36c44;

    pre.prettyprint {
        padding: 1rem 1.250rem;
        border: none;
        background-color: #353535;

        code { background-color: inherit; }

        .tag { color: $tag}
        .atn,
        .pun { color: oo('colors.primary'); }
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
            .kwd { color: oo('colors.primary'); }
            .lit { color: $value; }
        }

        &.language-scss {
            .lit { color: #eabc5f; }
            .pln { color: oo('colors.primary'); }
            .pun,
            .pun + .kwd { color: #fff; }
            .kwd { color: $value; }
            .str { color: $attribute; }
            .lit + .pln { color: #d4864a; }
        }
        &.language-css.language-scss{
            .pun + .pln {
                color: #fff;
            }
            .kwd { color: #b58de0 }
            .lit + .pln + .kwd { color: $value; }
        }
    }
</style>
