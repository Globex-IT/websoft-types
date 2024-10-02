﻿import ts = require("typescript");
import it = require("./interfaces/ibase.transformer");

const methods = [
    'map',
    'filter',
    'some',
    'any',
    'reduce',
    'includes',
    'find',
    'pop',
    'shift'
];

export class ArrayMethodTransformer implements it.IBaseTransformer {
    private methods: string[] = methods;

    public transform(): ts.TransformerFactory<ts.SourceFile> {
        return (context: ts.TransformationContext) => {
            const visitor: ts.Visitor = (node) => this.visitNode(node, context);
            return (node: ts.SourceFile) => ts.visitNode(node, visitor);
        };
    }

    private visitNode(node: ts.Node, context: ts.TransformationContext): ts.Node {
        if (ts.isCallExpression(node)) {
            const expression = node.expression;

            if (ts.isPropertyAccessExpression(expression) && this.methods.includes(expression.name.text)) {
                const methodName = expression.name.text;
                const array = expression.expression;
                const args = node.arguments;

                if (ts.isCallExpression(array) && ts.isPropertyAccessExpression(array.expression) && this.methods.includes(array.expression.name.text)) {
                    const innerMethodName = array.expression.name.text;
                    const innerArray = array.expression.expression;
                    const innerArgs = array.arguments;

                    return ts.factory.createCallExpression(
                        ts.factory.createIdentifier(methodName),
                        undefined,
                        [
                            ts.factory.createCallExpression(
                                ts.factory.createIdentifier(innerMethodName),
                                undefined,
                                [innerArray, ...innerArgs]
                            ),
                            ...args
                        ]
                    );
                }

                return ts.factory.createCallExpression(
                    ts.factory.createIdentifier(methodName),
                    undefined,
                    [array, ...args]
                );
            }
        }

        return ts.visitEachChild(node, (childNode) => this.visitNode(childNode, context), context);
    }
}