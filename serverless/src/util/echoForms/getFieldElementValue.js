import xpath from 'xpath'
import { DOMParser } from '@xmldom/xmldom'
import { namespaces } from './namespaces'

/**
 * Find a specific tag in the provided XML string and return its text value
 * @param {String} xmlDocument ECHO Form xml as a string
 * @param {String} fieldName Name of the tag to look for
 * @param {String} dataType XML namespace
 */
export const getFieldElementValue = (xmlDocument, fieldName, dataType = 'ecs') => {
  const doc = new DOMParser().parseFromString(xmlDocument)

  return xpath.useNamespaces(namespaces)(`string(//${dataType}:${fieldName})`, doc)
}
