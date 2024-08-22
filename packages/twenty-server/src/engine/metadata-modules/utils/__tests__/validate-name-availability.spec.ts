import {
  FIELD_ACTOR_MOCK_NAME,
  FIELD_ADDRESS_MOCK_NAME,
  FIELD_CURRENCY_MOCK_NAME,
  FIELD_FULL_NAME_MOCK_NAME,
  FIELD_LINKS_MOCK_NAME,
  objectMetadataItemMock,
} from 'src/engine/api/__mocks__/object-metadata-item.mock';
import {
  NameNotAvailableException,
  validateNameAvailabilityOrThrow,
} from 'src/engine/metadata-modules/utils/validate-name-availability.utils';

describe('validateNameAvailabilityOrThrow', () => {
  const objectMetadata = objectMetadataItemMock;

  it('does not throw if name is not reserved', () => {
    const name = 'testName';

    expect(() =>
      validateNameAvailabilityOrThrow(name, objectMetadata),
    ).not.toThrow();
  });

  describe('error cases', () => {
    it('throws error with LINKS suffixes', () => {
      const name = `${FIELD_LINKS_MOCK_NAME}PrimaryLinkLabel`;

      expect(() =>
        validateNameAvailabilityOrThrow(name, objectMetadata),
      ).toThrow(NameNotAvailableException);
    });
    it('throws error with CURRENCY suffixes', () => {
      const name = `${FIELD_CURRENCY_MOCK_NAME}AmountMicros`;

      expect(() =>
        validateNameAvailabilityOrThrow(name, objectMetadata),
      ).toThrow(NameNotAvailableException);
    });
    it('throws error with FULL_NAME suffixes', () => {
      const name = `${FIELD_FULL_NAME_MOCK_NAME}FirstName`;

      expect(() =>
        validateNameAvailabilityOrThrow(name, objectMetadata),
      ).toThrow(NameNotAvailableException);
    });
    it('throws error with ACTOR suffixes', () => {
      const name = `${FIELD_ACTOR_MOCK_NAME}Name`;

      expect(() =>
        validateNameAvailabilityOrThrow(name, objectMetadata),
      ).toThrow(NameNotAvailableException);
    });
    it('throws error with ADDRESS suffixes', () => {
      const name = `${FIELD_ADDRESS_MOCK_NAME}AddressStreet1`;

      expect(() =>
        validateNameAvailabilityOrThrow(name, objectMetadata),
      ).toThrow(NameNotAvailableException);
    });
  });
});
